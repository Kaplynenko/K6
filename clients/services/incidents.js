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
  //   archiveCallsign(id) {
  //     const payload = { isArchive: true };
  //     return this.put(`${getUrl.getCallsign}${id}/archive`, payload);
  //   }
  //   deleteById(id) {
  //     return this.delete(`${getUrl.getCallsign}${id}`);
  //   }
}
