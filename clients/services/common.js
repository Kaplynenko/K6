import { HttpClient } from "../core/http.js";
import { training } from "../core/config.js";
import { getUrl } from "../helpers/endpoints.js";

export class Common extends HttpClient {
  constructor(token) {
    super({ host: training.baseUrl, token });
  }

  logOutUser() {
    return this.post(getUrl.logOut);
  }
  getMessage(referenceId) {
    return this.get(`${getUrl.getNotes}events/${referenceId}`);
  }
}
