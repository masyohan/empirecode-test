import axios from "axios";
import { baseURL } from "../config/config";
import { getToken, setToken } from "../helpers/auth/token";

class Api {
  static validate(callback) {
    axios({
      url: baseURL + "/validate",
      method: "get",
      headers: {
        token: getToken(),
      },
    })
      .then(({ data }) => {
        callback(data);
        return;
      })
      .catch((error) => {
        console.log(error);
        callback(error);
        return;
      });
  }
  static login(user, callback) {
    axios({
      url: baseURL + "/login",
      method: "post",
      data: user,
    })
      .then(({ data }) => {
        callback(null, data);
        return;
      })
      .catch((error) => {
        callback(error, null);
        return;
      });
  }
}

export default Api;
