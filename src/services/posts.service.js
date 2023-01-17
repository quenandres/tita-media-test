import axios from 'axios';

const headers = {
    'app-id': import.meta.env.VITE_API_KEY
}

const base_url = `https://dummyapi.io/data/v1/`;

export async function getPosts() {
    const posts = await axios.get(`${base_url}post?limit=20`,  { headers });
    const resp  = await posts.data;
    return resp;
}


export const getComments = async (id) => {
    const comments = await axios.get(`${base_url}post/${id}/comment?limit=20`,  { headers });
    const resp  = await comments.data;
    return resp;
}

export const getPostTag = async (tag) => {
    const posts = await axios.get(`${base_url}tag/${tag}/post?limit=20`,  { headers });
    const resp  = await posts.data;
    return resp;
}

export const getUser = async (id) => {
    const user = await axios.get(`${base_url}user/${id}`,  { headers });    
    return user;
}