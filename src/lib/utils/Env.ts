import { URL, TEMP_AUTHENTIFICATION_TOKEN } from "$env/static/private";

export function parseURL(end_url: string, https: boolean = false) {
  // AUTH_TOKEN is temporary, will be replaced by a token given by the user
  // if token is not valid, return 401
  // if token is valid, return the data with 200
  let authToken = (end_url.includes("?") ? "&" : "?") + "authToken=" + TEMP_AUTHENTIFICATION_TOKEN;
  return (https ? "https://" : "http://") + URL + "/" + end_url + authToken;
}
