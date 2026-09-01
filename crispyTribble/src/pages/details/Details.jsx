import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const params = useParams();
    console.log(params);
    return (
        <div>Details</div>
    );
}

export default Details;
