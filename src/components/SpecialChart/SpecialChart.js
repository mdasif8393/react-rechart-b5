import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phone?search=iphone')
        .then(data => console.log(data.data.data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default SpecialChart;