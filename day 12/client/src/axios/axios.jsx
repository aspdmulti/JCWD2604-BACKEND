/** @format */

import axios from "axios";

export const axiosInstance = () => {
  const token = localStorage.getItem("users");
  return axios.create({
    baseURL: "http://localhost:8001",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const axiosInstanceSSR = () => {
  return axios.create({
    baseURL: "http://localhost:8001",
  });
};
