import { PORT, URL } from "$env/static/private";

export function parseURL(end_url: string, https: boolean = false) {
  return (https ? "https://" : "http://") + URL + "/" + end_url;
}
