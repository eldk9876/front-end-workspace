import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/member/",
});

export const signup = async (formData) => {
  return await instance.post("signup", formData);
};

export const login = async (data) => {
  try {
    return await instance.post("login", data);
  } catch {
    new Error("LOGIN FAIL");
  }
};
