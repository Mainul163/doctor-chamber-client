import React, { useState } from 'react';
import Footer from '../../Coommon/Footer/Footer';
import Navbar from '../../Coommon/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
const Appointment = () => {
    const[selecteDate,setSelecteDate]=useState(new Date())
    const handleChange=data=>{
        setSelecteDate(data)
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleChange={handleChange}></AppointmentHeader>
            <BookAppointment date={selecteDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;