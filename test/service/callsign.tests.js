import { check, group, sleep } from "k6";
import GetAuthToken from "../../clients/auth.js";
import { Callsign } from "../../clients/services/callsign.js";
import { training } from "../../clients/core/config.js";

export const options = {
  vus: 1,
  duration: "60s",
};

export function setup() {
  const { username, password } = training;
  const token = GetAuthToken(username, password);
  return token;
}

export default function (token) {
  const callsignApi = new Callsign(token);

  group("GET Callsign", function () {
    const callsignList = callsignApi.getAll();
    const noDraftList = callsignList.filter((b) => !b.isDraft);
    check(noDraftList, {
      "is not empty": (r) => noDraftList.length !== 0,
      "each callsing has createdBy": (r) =>
        noDraftList.every((c) => c.createdBy),
    });
    sleep(5);
  });
  group("GET Callsing by id", function () {
    const callsignList = callsignApi.getAll();
    const randomCallsign =
      callsignList[Math.floor(Math.random() * callsignList.length)];
    const callsignById = callsignApi.getById(randomCallsign._id);
    check(callsignById, {
      "is not empty": (r) => callsignById.length !== 0,
      "callsing has id": (r) => r._id === randomCallsign._id,
    });

    sleep(5);
  });
  group("POST Callsing", function () {
    const callsignName = `K6-${Date.now()}`;
    const newCallsign = callsignApi.createCallSign(callsignName);
    check(newCallsign, {
      "Callsign has been created": (p) => p._id,
    });
    sleep(5);
  });

  group("PUT callsign should archive", function () {
    const callsignName = `K6-${Date.now()}`;
    const newCallsignObj = callsignApi.createCallSign(callsignName);
    const callsignById = callsignApi.archiveCallsign(newCallsignObj._id);
    check(callsignById, {
      "is not empty": (r) => callsignById.length !== 0,
      "callsing should archive": (r) => r.isArchive === true,
    });

    sleep(5);
  });
  group("DELETE callsign By Id", function () {
    const callsignName = `K6-${Date.now()}`;
    const newCallsignObj = callsignApi.createCallSign(callsignName);
    const callsignById = callsignApi.deleteById(newCallsignObj._id);
    check(callsignById, {
      "is empty": (r) => !callsignById.length,
    });

    sleep(5);
  });
}
