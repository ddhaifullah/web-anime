import axios from 'axios';

const apiService = axios.create({
    baseURL: 'https://otakudesu-unofficial-api.rzkfyn.xyz/v1',
});

export const fetchAnimeData = async () => {
    try {
        const response = await apiService.get('home');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchGenres = async () =>  {
    try {
        const response = await apiService.get('genres');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchAnimeDetail = async (slug) => {
    try {
        const response = await apiService.get(`/anime/${slug}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchGenresDetail = async (slug) => {
    try {
        const response = await apiService.get(`/genres/${slug}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};