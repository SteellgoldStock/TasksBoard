import { URL, TEMP_AUTHENTIFICATION_TOKEN } from "$env/static/private";

export function parseURL(end_url: string, https: boolean = false) {
  let authToken = (end_url.includes("?") ? "&" : "?") + "authToken=" + TEMP_AUTHENTIFICATION_TOKEN;
  return (https ? "https://" : "http://") + URL + "/" + end_url + authToken;

  // TODO: Make an authentication system to have real data, not via environment variables
}
