import axios from 'axios';

const headers = {
    'app-id': import.meta.env.VITE_API_KEY
}

const base_url = `https://dummyapi.io/data/v1/`;

export async function getPosts() {
    const posts = await axios.get(`${base_url}post?limit=10`,  { headers });
    const resp  = await posts.data;
    return resp;
}


export const getComments = async (id) => {
    await axios.get(`${base_url}post/${id}/comment?limit=10`, { headers })
        .then(response => {
            const { data } = response;
            return data;
        })
        .catch(error => {
            console.error(error);
        });
}

export const getPostTag = async (tag) => {
    await axios.get(`${base_url}tag/${tag}/post?limit=10`, { headers })
        .then(response => {
            const {data} = response;
            return data;
        })
        .catch(error => {
            console.error(error);
        });
}