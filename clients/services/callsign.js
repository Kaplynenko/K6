import { HttpClient } from "../core/http.js";
import { getUrl } from "../helpers/endpoints.js";
import { training } from "../core/config.js";

export class Callsign extends HttpClient {
  constructor(token) {
    super({ host: training.baseUrl, token });
  }

  getAll() {
    return this.get(getUrl.getCallsign);
  }
  getById(id) {
    return this.get(`${getUrl.getCallsign}${id}`);
  }
  createCallSign(name) {
    const callSignbody = {
      callSignName: name,
    };
    return this.post(getUrl.getCallsign, callSignbody);
  }
  archiveCallsign(id) {
    const payload = { isArchive: true };
    return this.put(`${getUrl.getCallsign}${id}/archive`, payload);
  }
  deleteById(id) {
    return this.delete(`${getUrl.getCallsign}${id}`);
  }
}
