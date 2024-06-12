import axios from "axios";
import client from "./gql";
import gql from "graphql-tag";
import { User } from "../assets/Interfaces/User";

export const HttpClient = axios.create({
  baseURL: `http://localhost:8080/eywa`
});

export function setAuthToken(token = "") {
  HttpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const USER_PROFILE_QUERY = `
{
  getUser(euuid: "<UUID>") {
    roles {
      euuid
      name
    }
  }
}
`;

async function getUserProfileData(euuid: string) {
  const { getUser }: { getUser: User } = await client.request(
    gql`
      ${USER_PROFILE_QUERY.replace("<UUID>", euuid)}
    `
  );
  return getUser;
}

export const Api = {
  async whoami(token?: string | null | undefined) {
    try {
      const options = token
        ? { headers: { Authorization: `Bearer ${token}` } }
        : {};
      const { data } = await HttpClient.get("/whoami", options);
      const { user_profile, roles, out_of_office } =
        await getUserProfileData(data.euuid);
      data.roles = roles;
      return data;
    } catch (err) {
      throw new Error("http.ts: Whoami failed");
    }
  },

  async login(username: string, password: string) {
    try {
      const { data } = await HttpClient.post("/login", {
        username,
        password,
      });
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("http.ts: Login failed");
    }
  },
};
