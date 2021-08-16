import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Infocard.css'

const Infocard = ({info}) => {
    return (
        <div className='col-md-4 '>
          <div className={`d-flex  align-items-center justify-content-center ${info.color}  info-container`}>
          <div>
            <FontAwesomeIcon style={{fontSize:'3rem',paddingTop:'20px'}} icon={info.icon} />
            
            </div>
            <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
            </div>
          </div>
        </div>
    );
};

export default Infocard;