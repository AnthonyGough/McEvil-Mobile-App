//same CRUD functions for artists
import api from "./apiClient";

export const listArtists = () =>
  api.get("/artist").then((res) => res.data);

export const getArtist = (id) =>
  api.get(`/artist/${id}`).then((res) => res.data);

export const createArtist = (artist) =>
  api.post("/artist", artist).then((res) => res.data);

export const updateArtist = (id, artist) =>
  api.put(`/artist/${id}`, artist).then((res) => res.data);

export const deleteArtist = (id) =>
  api.delete(`/artist/${id}`).then((res) => res.data);
