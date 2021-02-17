import http from "./httpService";

function sellersUrl() {
  return process.env.REACT_APP_API_URL + "/sellers/1/supplies";
}

function buyersUrl() {
  return process.env.REACT_APP_API_URL + "/buyers/1/requirements";
}

export function postSellers(data) {
  return http.post(sellersUrl(), data);
}

export function postbuyers(data) {
  return http.post(buyersUrl(), data);
}
