//listSong(), getSong(), createSong(), updateSong(), deleteSong()
import api from "./apiClient";

export const listSongs = () =>
  api.get("/song").then((res) => res.data);

export const getSong = (id) =>
  api.get(`/song/${id}`).then((res) => res.data);

export const createSong = (song) =>
  api.post("/song", song).then((res) => res.data);

export const updateSong = (id, song) =>
  api.put(`/song/${id}`, song).then((res) => res.data);

export const deleteSong = (id) =>
  api.delete(`/song/${id}`).then((res) => res.data);
