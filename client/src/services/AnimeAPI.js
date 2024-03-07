import axios from 'axios';

const apiService = axios.create({
    baseURL: process.env.ANIME_API,
});

export const fetchAnimeData = async () => {
    try {
        const response = await apiService.get('home');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchGenres = async () => {
    try {
        const response = await apiService.get('genres');
        return response.data;
    } catch (error) {
        throw error;
    }
};
