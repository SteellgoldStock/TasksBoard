import { URL, USER_IDENTIFIER, USER_SECRET } from "$env/static/private";
// TODO: Make an authentication system to have real data, not via environment variables

export function parseURL(endUrl: string, https = false) {
  const accessToken = (endUrl.includes("?") ? "&" : "?") + "user_identifier=" + USER_IDENTIFIER + "&user_secret=" + USER_SECRET;
  return (https ? "https://" : "http://") + URL + "/" + endUrl + accessToken;

  // TODO: Make an authentication system to have real data, not via environment variables
}