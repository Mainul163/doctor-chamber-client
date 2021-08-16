import React from 'react';
import Infocard from '../Infocard/Infocard';
import { faClock,faMapMarked,faPhone } from '@fortawesome/free-solid-svg-icons'
const infodetails=[
        {
            title:'Opening Hours',
            icon: faClock,
            description:'Nonumy accusam sed labore sed tempor sed dolores, est at.',
            color:'blue'
        },

        {
           title:'Visit Our Location',
            icon: faMapMarked,
            description:'Nonumy accusam sed labore sed tempor sed dolores, est at.',
            color:'green'
        },

        {
            title:'Contact us now',
            icon: faPhone,
            description:'Nonumy accusam sed labore sed tempor sed dolores, est at.',
            color:'black'
        }
]
const Businessinfo = () => {
    return (
     <div className='d-flex justify-content-center'>

            <div className='row w-75'>
                {
                    infodetails.map(info => <Infocard info={info}></Infocard>)
                }

            </div>
     </div>
    );
};

export default Businessinfo;