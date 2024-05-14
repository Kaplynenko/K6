import { check, group, sleep } from "k6";
import GetAuthToken from "../../clients/auth.js";
import { Common } from "../../clients/services/common.js";
import { training } from "../../clients/core/config.js";
import { Incidents } from "../../clients/services/incidents.js";

export const options = {
  vus: 1,
  duration: "10s",
};

export function setup() {
  const { username, password } = training;
  const token = GetAuthToken(username, password);
  return token;
}
export default function (token) {
  const CommonApi = new Common(token);
  group("POST common request", function () {
    CommonApi.logOutUser();
  });
}
