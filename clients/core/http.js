import { check } from "k6";
import http from "k6/http";

/**
 * @typedef HttpClientOptions
 * @property {string} host
 * token auth:
 * @property {string} [token]x
 *
 */

export class HttpClient {
  /**
   * @param {HttpClientOptions} options
   */
  constructor(options) {
    /**
     * @private
     */
    this.host = options.host;
    /**
     * @private
     */
    this.token = options.token || "";
  }

  /**
   * @private
   */
  get params() {
    const params = {
      headers: { "Content-Type": "application/json", deviceId: "413224534423" },
    };

    const token = this.token;
    const keyword = "Bearer";
    params.headers["Authorization"] = `${keyword} ${token}`;
    return params;
  }

  /**
   * @param {string} method
   * @param {string} path
   * @param {import('k6/http').RequestBody} body
   * @returns {import('k6').JSONValue}
   * @private
   */
  request(method, path, body) {
    const url = `${this.host}${path}`;

    const methodWithUrl = `${method.toUpperCase()} ${url}`;

    console.log(`[http] requesting ${methodWithUrl} ...`);

    const requestBody = JSON.stringify(body);

    const response = body
      ? http[method](url, requestBody, this.params)
      : http[method](url, this.params);

    const err = response.error_code
      ? `code: ${response.error_code} ${response.error}`
      : "";
    console.log("UUUU", response);
    console.log(`[http] ${response.status_text} ${methodWithUrl} ${err}`);

    check(response, {
      [`[http] ${methodWithUrl} is OK`]: (r) =>
        r.status >= 200 && r.status < 300,
    });
    if (err) {
      return {};
    }
    if (response.body === "OK") {
      return "OK";
    }

    return response.json();
  }

  /**
   * @param {string} path
   * @protected
   */
  get(path) {
    return this.request("get", path);
  }

  /**
   * @param {string} path
   * @param {import('k6/http').RequestBody}
   * @param {boolean} [isForm]
   * @protected
   */
  post(path, body, isForm) {
    this.isForm = isForm;
    return this.request("post", path, body);
  }

  /**
   * @param {string} path
   * @param {import('k6/http').RequestBody}
   * @protected
   */
  put(path, body = {}) {
    return this.request("put", path, body);
  }

  /**
   * @param {string} path
   * @param {import('k6/http').RequestBody}
   * @protected
   */
  patch(path, body) {
    return this.request("patch", path, body);
  }

  /**
   * @param {string} path
   * @param {RequestBody} body
   * @param {import('k6/http').RequestBody}
   * @protected
   */
  delete(path, body = {}) {
    return this.request("del", path, body);
  }
}
