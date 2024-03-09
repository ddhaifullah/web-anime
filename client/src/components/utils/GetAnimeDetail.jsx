import React from 'react';
import {useParams} from 'react-router-dom';

const GetAnimeDetail = () => {
    const {slug} = useParams();

    return (
        <div>
            <h1>Ini - {slug}</h1>
        </div>
    )
}

export default GetAnimeDetail