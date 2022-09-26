// import { authHeader } from "../util/authHeader";
// import { handleResponse, handleError } from "../util/response";
// import { AUTH_LOGIN, AUTH_REGISTER } from "../apiEndpoints";
// import axios from "axios";

import axios from "axios";

class ApiAuth {
  backendURL = "http://localhost:5000";
  login;
  register;

  constructor() {
    this.login = async (userInfo) => {
      const url = this.backendURL + "/users/login";
      return axios.post(url, userInfo);
    };

    this.register = async (userInfo) => {
      const url = this.backendURL + "/users";
      return axios.post(url, userInfo);
    };
  }
}

export default new ApiAuth();
