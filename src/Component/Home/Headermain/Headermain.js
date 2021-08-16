import React from 'react';
import chair from '../../../images/chair.png'
import './Headermain.css'

const Headermain = () => {
    const style={
        height:'650px'
    }
    return (
        <div style={style} className='d-flex justify-content-center align-items-center'>
        <div className='row'>
            <div className='col-md-6 background'>
               <h1 className='text-color text-style'>Your New Smile <br /> Start Here</h1>
               <p style={{textAlign:'justify'}}>Stet consetetur at elitr diam ut sea. <br />
                Diam lorem vero eirmod stet gubergren. <br />
                   Lorem dolor diam erat amet ea tempor.</p>
               
                <button type="button" class="btn btn-clr">GET APPOINTMENT</button>
            </div>
            <div className='col-md-6'>
               <img src={chair} className='img-fluid' alt="" />
            </div>
            
        </div>
        </div>
    );
};

export default Headermain;