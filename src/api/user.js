import axios from './axios';

export const getUsersRequest = () =>  axios.get(`/user`);
export const addUsersRequest = (user) => axios.post(`/user`, user);