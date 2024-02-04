import React from 'react';
import aboutImg from '../asstes/images/aboutus.png'

const AboutUsPage = () => {
    return (
        <div className='container pt-3'>
            <div className="row">
                <div className="col-12 bg-info p-3 rounded">
                    <h3>About Us</h3>
                </div>
            </div>
            <div className="row   align-items-center mt-4">
                <div className="col-md-6">
                    Hill and Knowlton is a global communications consultancy dedicated
                    to shaping and delivering powerful messages that drive business success.
                    With a rich history spanning decades, our team of seasoned professionals
                    brings unparalleled expertise in public relations, strategic communication,
                    and digital marketing. We pride ourselves on fostering meaningful connections
                    between our clients and their audiences, leveraging innovative solutions to navigate
                    the ever-evolving landscape of communication. At Hill and Knowlton, we are committed
                    to crafting compelling narratives that resonate, influence, and elevate brands to new heights.
                    As we continue to evolve in the digital age, our dedication to fostering authentic connections 
                    remains unwavering. Whether it's shaping brand identities, managing reputations, or driving strategic
                    campaigns, Hill and Knowlton is the partner of choice for those who seek to thrive in an ever-changing 
                    world of communication.
                </div>
                <div className="col-md-6 text-center">
                    <img src={aboutImg} alt="About Us" />
                </div>
            </div>


        </div>
    );
};

export default AboutUsPage;