import React from 'react';
import teeth from '../../../images/Teeth.png'
import tooth from '../../../images/tooth (1).png'
import tooth1 from '../../../images/tooth.png'
import ServicesInfo from '../ServicesInfo/ServicesInfo';
const infoServies=[
    {

        logo:teeth,
        name:'Fluoride Treatment',
        title:'Sit elitr kasd lorem eos sea diam aliquyam dolore tempor. '

    },
    {

        logo:tooth,
        name:'Cavity Filling',
        title:'Sit elitr kasd lorem eos sea diam aliquyam dolore tempor. '

    },
    {

        logo:tooth1,
        name:'Teath Whitening',
        title:'Sit elitr kasd lorem eos sea diam aliquyam dolore tempor. '

    }
]
const Services = () => {
    return (
        <section className='divmargin'>
          
                <div className='text-center'>
                <h6 style={{color:'#18D3B2'}}>OUR SERVICES</h6>
                <h4>Services Web Provied</h4>
                </div>

                {
                    <div className='d-flex justify-content-center mt-5'>

                        <div className='w-75 row'>
                        {
                            infoServies.map(info=><ServicesInfo info={info}></ServicesInfo>)
                        }

                        </div>
                    </div>
                }
        </section>
    );
};

export default Services;