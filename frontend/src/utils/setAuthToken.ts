import { instance } from "../apis/api.instance";

export const setAuthToken = (token: any) => {
  if (token) {
    instance.defaults.headers.common["auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete instance.defaults.headers.common["auth-token"];
    localStorage.removeItem("token");
  }
};
