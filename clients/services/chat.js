import { HttpClient } from "../core/http.js";
import { training } from "../core/config.js";
import { getUrl } from "../helpers/endpoints.js";

export class Chat extends HttpClient {
  constructor(token) {
    super({ host: training.baseUrl, token });
  }

  addMessageToIncident(referenceId) {
    const body = {
      referenceId,
      message: "Automation Test",
    };
    return this.post(getUrl.getNotes, body);
  }
  getMessage(referenceId) {
    return this.get(`${getUrl.getNotes}events/${referenceId}`);
  }
}
