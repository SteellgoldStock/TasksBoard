import { URL, REQUEST_TYPE } from "$env/static/private";

export function parseURL(endUrl: string) {
  return REQUEST_TYPE + "://" + URL + "/" + endUrl;
}