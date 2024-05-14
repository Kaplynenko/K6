import { HttpClient } from "../core/http.js";
import { getUrl } from "../helpers/endpoints.js";
import { training } from "../core/config.js";

export class Incidents extends HttpClient {
  constructor(token) {
    super({ host: training.baseUrl, token });
  }

  getAll() {
    return this.get(getUrl.getIncidents);
  }
  getById(id) {
    return this.get(`${getUrl.getIncidents}${id}`);
  }
  createIncident(incidentData) {
    return this.post(getUrl.getIncidents, incidentData);
  }
  end(eventId) {
    return this.put(`${getUrl.getIncidents}${eventId}/end`);
  }
  deleteById(id) {
    const res = this.end(id);
    console.log("YYYYYY", res);
    return this.delete(`${getUrl.getPlaybacks}${id}`);
  }
}
