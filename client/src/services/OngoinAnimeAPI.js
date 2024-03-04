import axios from 'axios';

const fetchOngoingAnimeData = async (apiUrl) => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch ongoing anime data: ${error.message}`);
    }
};

export default fetchOngoingAnimeData;