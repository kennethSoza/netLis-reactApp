import axios from "axios";

axios.defaults.baseURL = "https://localhost:44342/api";

axios.interceptors.response.use(function (response) {
    throw new axios.Cancel('Operation canceled by the user.');
  }, function (error) {
    return Promise.reject(error);
  });
  
const requestGenerico = {
    get: (url) =>axios.get(url),
    post: (url,body) => axios.post(url, body),
    put: (url, body) => axios.put(url, body),
    delete: (url) => axios.delete(url)
};

export default requestGenerico;