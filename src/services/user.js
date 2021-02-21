import http from "./httpService";
import axios from "axios";

const getSignupUrl = () => {
  return process.env.REACT_APP_API_URL + "/users";
};

const getLoginUrl = () => {
  return process.env.REACT_APP_URL+"/logins";
  //return process.env.REACT_APP_URL + "/logins";
};
export const signUp = async (data) => {
  return await http.post(getSignupUrl(), data);
};

export const login = async (data) => {
  return await axios.post(getLoginUrl(), data);
};
