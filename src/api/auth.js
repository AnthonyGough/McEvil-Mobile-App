//register() & login() calls
import api from "./apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function register(username, password) {
  const { data } = await api.post("/auth/register", { username, password });
  // data: { user: {...}, token: "..." }
  await AsyncStorage.setItem("userToken", data.token);
  return data.user;
}

export async function login(username, password) {
  const { data } = await api.post("/auth/login", { username, password });
  await AsyncStorage.setItem("userToken", data.token);
  return data.user;
}

export async function logout() {
  await AsyncStorage.removeItem("userToken");
}