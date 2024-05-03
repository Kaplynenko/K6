import http from 'k6/http';
import { getUrl } from './helpers/endpoints.js';
import { training } from './core/config.js';

export default function GetAuthToken(username, password) {
    const { baseUrl } = training;
    const payload = JSON.stringify({
      username,
      password
    });
    const params = {
      headers: {
        "Content-Type": "application/json",
        deviceId: "1231242353453453",
      },

    }
    const res = http.post(`${baseUrl}${getUrl.login}`, payload, params);

    const result = JSON.parse(res.body);

    return result.access_token;
}