import axios from './axios';

export const getNotesRequest = () => axios.get(`/notes`);
export const addNotesRequest = (notes) => axios.post(`/notes`,notes);
export const updateNotesRequest = (note) => axios.put(`/notes/${note._id}`, note);
export const deleteNotesReques =(id) => axios.delete(`/notes/${id}`)

