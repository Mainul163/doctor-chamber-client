import React from 'react';
import Featured from '../../../images/check.png'
const FeaturedService = () => {
    return (
        <div className='d-flex justify-content-center divmargin'>
            <div className='row w-75'>
                <div className='col-md-7'>
                <img src={Featured} class="img-fluid" style={{width:'100%',height:'500px'}} alt="..."/>
                </div>
                <div style={{height:'300px'}} className='col-md-5 mt-5'>
                    <h2 className='text-style'>Exceptional Dental <br /> Care,on Your Terms</h2>
                   <p style={{textAlign:'justify'}}>Et at vero amet est dolore amet. At dolor sed consetetur gubergren et, clita eirmod dolore vero sit, vero lorem duo et stet dolor eirmod. Erat sit dolor sanctus sed, eos ea eos ut dolores et lorem labore et. Sanctus. </p>
                   <button type="button" class="btn btn-clr">GET APPOINTMENT</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;