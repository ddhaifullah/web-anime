import axios from 'axios';

const fetchAnimeData = async () => {
    const options = {
        method: 'GET',
        url: 'https://anime-manga-and-novels-api.p.rapidapi.com/anime',
        params: {
        page: '1',
        pageSize: '10',
        },
        headers: {
        'X-RapidAPI-Key': 'c071ad1223msh9b80db6d0e9de52p1a593bjsnf94779a39a88',
        'X-RapidAPI-Host': 'anime-manga-and-novels-api.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default fetchAnimeData;
