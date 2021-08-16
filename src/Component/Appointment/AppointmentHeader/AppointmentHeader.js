import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/chair.png'
const AppointmentHeader = ({handleChange}) => {
    const style={
        height:'360px'
    }
    return (
        <div style={style} className='d-flex justify-content-center divmargin'>
          
          <div className='row w-75'>
             <div className='col-md-5'>
                 <h1 className='text-center text-color text-style pb-2'> Appointment</h1>
             <Calendar
        onChange={handleChange}
        value={new Date()}
      />
             </div>

             <div className='col-md-7'>
             <img src={chair} className='img-fluid' alt="" />
             </div>
          </div>

       </div>
        
    );
};

export default AppointmentHeader;