import React, { useEffect, useState } from 'react';
import { fetchAnimeData } from '../services/AnimeAPI';

const Release = () => {
    const [jadwal, setJadwal] = useState([]);
    const [loading, setLoading] = useState(true);

    const groupByDay = (animeList) => {
        return animeList.reduce((acc, anime) => {
        const day = anime.release_day;
        if (!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(anime);
        return acc;
        }, {});
    };

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await fetchAnimeData();
            console.log(data);
            setJadwal(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, []);

    return (
        <>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
            <h1>Jadwal Rilis Anime</h1>
            {jadwal && jadwal.data && jadwal.data.ongoing_anime && (
                <div>
                {Object.entries(groupByDay(jadwal.data.ongoing_anime)).map((item, index) => (
                    <div key={index}>
                    <h2>{item[0]}</h2>
                    <ul>
                        {item[1].map((anime, index) => (
                        <li key={index}>{anime.title}</li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            )}
            </div>
        )}
        </>
    );
};

export default Release;