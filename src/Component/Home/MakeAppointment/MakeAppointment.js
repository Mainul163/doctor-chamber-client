import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'
const MakeAppointment = () => {
    return (
        <div className='d-flex justify-content-center container-size'>
           <div className='make w-75'>
           <div className='row '>
             <div className='col-md-5'>
               <img src={doctor} alt="" />
             </div>
             <div className='col-md-7 text-white ps-5 pt-3 text'>
                        <h5 className=" text-uppercase  ">Appointment</h5>
                        <h1 className="my-4 ">Make an Appointment <br /> Today</h1>
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
             </div>
            </div>
           </div>
        </div>
    );
};

export default MakeAppointment;