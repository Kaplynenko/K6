import { check, group, sleep } from "k6";
import GetAuthToken from "../../clients/auth.js";
import { Chat } from "../../clients/services/chat.js";
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
  const ChatApi = new Chat(token);
  const IncidentsApi = new Incidents(token);
  group("GET chat", function () {
    const incident = `Incident_k6-${Date.now()}`;
    const createdIncident = IncidentsApi.createIncident({
      incident,
    });
    ChatApi.addMessageToIncident(createdIncident.referenceId);
    const allMessage = ChatApi.getMessage(createdIncident.referenceId);
    check(allMessage, {
      "is not empty": (r) => allMessage.length !== 0,
      "each message has text": (r) => allMessage.every((c) => c.message),
    });
    sleep(5);
  });
}
