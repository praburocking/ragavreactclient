import http from "./httpService";

function categoriesUrl() {
  return process.env.REACT_APP_API_URL + "/categories";
}
function subcategoriesUrl() {
  return process.env.REACT_APP_API_URL + "/sub-categories";
}

export function getcategories() {
  return http.get(categoriesUrl());
}
export function getsubcategories() {
  return http.get(subcategoriesUrl());
}
