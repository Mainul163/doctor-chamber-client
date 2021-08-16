import React from 'react';

const ServicesInfo = ({info}) => {
    return (
        <div className='col-md-4 text-center  '>
            <img style={{height:'80px',padding:'10px'}} src={info.logo} alt="" />
            <h3>{info.name}</h3>
            <h6>{info.title}</h6>
        </div>
    );
};

export default ServicesInfo;