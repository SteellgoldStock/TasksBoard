import { parseURL } from "$lib/utils/Env";
import { USER_IDENTIFIER, USER_SECRET } from "$env/static/private";
import jwt from "jsonwebtoken";

const FAKE_AUTH_USER = {
  username: "John Doe",
  email: "john@doe.com",
  password: "mYpAsSwOrDiSuPeRsEcReT",
  userIdentifier: USER_IDENTIFIER,
  userSecret: USER_SECRET
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const token = jwt.sign({
    user: FAKE_AUTH_USER.userIdentifier, secret: FAKE_AUTH_USER.userSecret
  }, "secretKeyHere", { expiresIn: "1m" });

  const response = await fetch(parseURL("tasks/" + USER_IDENTIFIER), {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return {
    tasks: JSON.stringify(await response.json())
  };
}