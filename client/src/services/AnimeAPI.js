import axios from 'axios';

const fetchAnimeData = async () => {
    try {
        const response = await axios.get('https://otakudesu-unofficial-api.rzkfyn.xyz/v1/home');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default fetchAnimeData;