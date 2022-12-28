import { URL, USER_IDENTIFIER, USER_SECRET } from "$env/static/private";
// TODO: Make an authentication system to have real data, not via environment variables

export function parseURL(end_url: string, https: boolean = false) {
  let accessToken = (end_url.includes("?") ? "&" : "?") + "user_identifier=" + USER_IDENTIFIER + "&user_secret=" + USER_SECRET;
  return (https ? "https://" : "http://") + URL + "/" + end_url + accessToken;

  // TODO: Make an authentication system to have real data, not via environment variables
}
