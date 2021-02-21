import http from "./httpService";
import { getCookie } from "../utils/cookieUtil";

function sellersUrl() {
  const userid = getCookie("id");
  if (userid === "" || userid === undefined || userid === null) {
    throw "no user found";
  }
  return process.env.REACT_APP_API_URL + "/sellers/" + userid + "/supplies";
}

function buyersUrl() {
  const userid = getCookie("id");
  if (userid === "" || userid === undefined || userid === null) {
    throw "no user found";
  }
  return process.env.REACT_APP_API_URL + "/buyers/" + userid + "/requirements";
}

export function postSellers(data) {
  return http.post(sellersUrl(), data);
}

export function postbuyers(data) {
  return http.post(buyersUrl(), data);
}
