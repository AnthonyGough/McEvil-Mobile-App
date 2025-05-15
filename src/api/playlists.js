//same CRUD functions for playlists
import api from "./apiClient";

export const listPlaylists = () => api.get("/playlist").then((res) => res.data);

export const getPlaylist = (id) =>
  api.get(`/playlist/${id}`).then((res) => res.data);

export const createPlaylist = (pl) =>
  api.post("/playlist", pl).then((res) => res.data);

export const updatePlaylist = (id, pl) =>
  api.put(`/playlist/${id}`, pl).then((res) => res.data);

export const deletePlaylist = (id) =>
  api.delete(`/playlist/${id}`).then((res) => res.data);
