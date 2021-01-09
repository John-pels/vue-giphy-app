export const API_KEY = "OYa73aJOBfbenMLiAav9ZXswodSdoTTW";
export const BASE_URL = "https://api.giphy.com/v1";
export const MISC = "&limit=30&offset=0&rating=G&lang=en";
export const SEARCH = (key, query) => `/gifs/search?api_key=${key}&q=${query}`;
