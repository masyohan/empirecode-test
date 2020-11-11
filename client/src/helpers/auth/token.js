module.exports = {
  getToken: () => {
    return localStorage.getItem("token");
  },
  setToken: (token) => {
    return localStorage.setItem("token", token);
  },
  clearToken: () => {
    return localStorage.removeItem("token");
  },
};
