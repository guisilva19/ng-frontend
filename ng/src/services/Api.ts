import axios from "axios";

export const Api = axios.create({
  baseURL: "https://ng-cash-gui.herokuapp.com",
});