import { HttpClient } from "../core/http.js";
import { permCategories } from "../helpers/endpoints.js";
import { training } from "../core/config.js";

export class Categories extends HttpClient {
  constructor(token) {
    super({ host: training.baseUrl, token });
  }

  getAll() {
    const getCategories = permCategories.filter(
      (c) => c.name === "PermissionCategories.Read.All"
    )[0].path;
    return this.get(`/${getCategories}`);
  }
  getCattegoriesById(id) {
    const getCategories = permCategories.filter(
      (c) => c.name === "PermissionCategories.Read.All"
    )[0].path;
    return this.get(`${getCategories}/${id}`);
  }
}
