import { check, group, sleep } from "k6";
import GetAuthToken from "../../clients/auth.js";
import { Categories } from "../../clients/services/categories.js";
import { training } from "../../clients/core/config.js";

export const options = {
  vus: 1,
  duration: "5s",
};

export function setup() {
  const { username, password } = training;
  const token = GetAuthToken(username, password);
  return token;
}
export default function (token) {
  const categoriesApi = new Categories(token);
  const res = categoriesApi.getAll();
  check(res, {
    "is not empty": (r) => res.length !== 0,
    "each categorie has id": (r) => res.every((c) => c._id),
  });
}
