import { check, group, sleep } from "k6";
import GetAuthToken from "../../clients/auth.js";
import { Incidents } from "../../clients/services/incidents.js";
import { training } from "../../clients/core/config.js";

export const options = {
  vus: 1,
  duration: "15s",
};

export function setup() {
  const { username, password } = training;
  const token = GetAuthToken(username, password);
  return token;
}

export default function (token) {
  const IncidentsApi = new Incidents(token);

  group("GET Incidents", function () {
    const incidentsList = IncidentsApi.getAll();
    const noDraftList = incidentsList.filter((b) => !b.isDraft);
    check(noDraftList, {
      "is not empty": (r) => noDraftList.length !== 0,
      "each event has createdBy": (r) => noDraftList.every((c) => c.createdBy),
    });
    sleep(5);
  });
  group("GET Incidents by id", function () {
    const incidentsList = IncidentsApi.getAll();
    const randomIncident =
      incidentsList[Math.floor(Math.random() * incidentsList.length)];
    const incidentById = IncidentsApi.getById(randomIncident._id);
    check(incidentById, {
      "is not empty": (r) => incidentById.length !== 0,
      "incident has id": (r) => r._id === randomIncident._id,
    });

    sleep(5);
  });
  group("POST Incident", function () {
    const incident = `Incident_k6-${Date.now()}`;
    const createdIncident = IncidentsApi.createIncident({
      incident,
    });
    check(createdIncident, {
      "incident has been created": (p) => p._id,
    });
    sleep(5);
  });
  group("DELETE Incident by id", function () {
    const incident = `Incident_k6-${Date.now()}`;
    const createdIncident = IncidentsApi.createIncident({
      incident,
    });
    const deletedIncident = IncidentsApi.deleteById(createdIncident._id);
    console.log("TTTTTT", deletedIncident);
    check(deletedIncident, {
      "is empty": (r) => !deletedIncident.length,
    });
    sleep(5);
  });
}
