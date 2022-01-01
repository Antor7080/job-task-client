import React, { useEffect, useState } from 'react';
import Service from './Service';



const Services = () => {

    const [services, setServices] = useState();

    useEffect(() => {
        fetch("https://evening-eyrie-71506.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data), [])
    })

    return (
        <div className='container'>
            <div className="row">
                {
                    services?.map(service => <Service service={service} key={service._id}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;