import { URL } from "$env/static/private";

export function parseURL(endUrl: string, https = false) {
  return (https ? "https://" : "http://") + URL + "/" + endUrl;
}