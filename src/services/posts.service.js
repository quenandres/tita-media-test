import axios from 'axios';

const headers = {
    'app-id': import.meta.env.VITE_API_KEY
}

const base_url = `https://dummyapi.io/data/v1/`;

export async function getPosts() {
    await axios.get(`${base_url}post?limit=10`,  { headers })
    .then(response => {
        const {data} = response;
        return data;
    })
    .catch(error => {
        console.error(error);
    });
}


