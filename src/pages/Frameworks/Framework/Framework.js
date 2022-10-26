import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Framework = () => {
    const [frameworks, setFrameworks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/frameworks')
        .then(res =>res.json())
        .then(data => setFrameworks(data));
    },[])

    return (
        <div>
            <h3>Frameworks:</h3>
            <div>
                {
                    frameworks.map(framework=><p className='m-0' key={framework.id}>
                        <Link className='fs-6 text-decoration-none' to={`/framework/${framework.id}`}>{framework.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Framework;