import React from 'react';

const PatientsDetails = ({patienttotalinfo}) => {
    return (
       
             <tr>
           
            <td>{patienttotalinfo.name}</td>
            <td>{patienttotalinfo.gender}</td>
            <td >{patienttotalinfo.appointment}</td>
            <td >{patienttotalinfo.phone}</td>
            <td >{patienttotalinfo.email}</td>
                   
        </tr>
        
    );
};export default PatientsDetails;