import axios from "axios";

import { BASE_URL, SEARCH } from "./config";

const api = axios.create({
  baseURL: BASE_URL,
});

export const searchRequest = (query) => {
  return api.get(SEARCH(query));
};
