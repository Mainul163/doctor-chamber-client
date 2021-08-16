import React from 'react';
import moment from 'moment'
const AppoinmentPatient = ({ detailsAppoinment}) => {
    const dateFormat = require("dateformat");

    return (
        <tr>
            <td scope="row">{detailsAppoinment.name}</td>
            <td scope="row">{detailsAppoinment.gender}</td>
            <td scope="row">{detailsAppoinment.appointment}</td>
            <td scope="row">{moment(detailsAppoinment.datecreated).format(" h:mm:ss a")}{" "}</td>
         
        </tr>
    );
};

export default AppoinmentPatient;