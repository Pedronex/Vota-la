import Constants from 'expo-constants';
import axios from "axios";

export const api = axios.create({
  baseURL: `http://${Constants.manifest.extra.IP_SERVER}:${Constants.manifest.extra.PORT}`,
});
