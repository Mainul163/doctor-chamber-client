import React, { useState } from 'react';
import AppointInfo from '../AppointInfo/AppointInfo';
const BookingCard = ({data,date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
      }
    return (
        <div className='col-md-4'>
            <div class="card" style={{ width: '18rem' }} className='pb-5'>
                <div class="card-body text-center ">
                    <h5 class="card-title color">{data.subject}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{data.visitingHour}</h6>
                    <p class="card-text"> Available Sit : {data.totalSpace}</p>
                    <button onClick={openModal} type="button" class="btn btn-clr">BOOK APPOINTMENT</button>
                    <AppointInfo modalIsOpen={modalIsOpen} data={data}date={date}closeModal={closeModal}></AppointInfo>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;