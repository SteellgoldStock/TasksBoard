import { PORT } from "$env/static/private";

export function parseURL(url: string, https: boolean = false) {
  return (https ? "https://" : "http://") + "127.0.0.1:" + PORT + "/" + url;
}