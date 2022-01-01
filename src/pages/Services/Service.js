import React from 'react';

const Service = ({ service }) => {
    const { img, name, cost, duration } = service
    return (
        <div className='col-lg-4 col-md-4 col-12' >
            <div className="text-center py-5 mt-5">
                <img className='img-fluid' src={img} alt="" />
                <h2>{name}</h2>
                <p>Cost: ${cost}</p>
                <p>Dustion: {duration}</p>
                <button className='btn-success'> Get Service </button>
            </div>
        </div>
    );
};

export default Service;