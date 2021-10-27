import axios, { AxiosResponse } from "axios";

export const initializeAxios = (): void => {
  axios.defaults.headers.get["Content-Type"] = "application/json";
  axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
  axios.interceptors.response.use((response: AxiosResponse) => response.data);
};
