import React from 'react';

const FAQPage = () => {
    return (
        <div className="container pt-3">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                        className="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne"
                        >
                            What services does Hill and Knowlton offer? #1
                        </button>
                    </h2>
                    <div 
                    id="collapseOne" 
                    className="accordion-collapse collapse show" 
                    data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        Hill and Knowlton is a global communications 
                        consultancy offering a comprehensive suite of 
                        services tailored to meet the unique communication 
                        needs of our diverse clientele. From strategic public 
                        relations and crisis management to cutting-edge digital 
                        marketing, stakeholder engagement, and content development, 
                        we specialize in crafting compelling narratives that resonate 
                        with audiences. Our dedicated team is committed to fostering 
                        meaningful connections, protecting reputations, and driving 
                        business success through innovative and strategic communication 
                        solutions. Whether you are a multinational corporation, startup, 
                        or non-profit organization, Hill and Knowlton is your trusted partner 
                        for navigating the complexities of the communication landscape and 
                        achieving tangible, impactful results.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="collapseTwo"
                        >
                            What industries does Hill and Knowlton specialize in? #2
                        </button>
                    </h2>
                    <div 
                    id="collapseTwo" 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        Hill and Knowlton, with a rich history 
                        spanning numerous industries, specializes 
                        in providing communication services across 
                        diverse sectors. Our expertise extends to 
                        technology, healthcare, finance, consumer 
                        goods, and beyond. We take pride in tailoring 
                        our services to the unique challenges and opportunities 
                        presented by each industry, ensuring that our clients 
                        receive targeted communication strategies that align 
                        with their specific goals. Whether you operate in a 
                        well-established sector or a niche industry, Hill and 
                        Knowlton has the knowledge and experience to deliver 
                        impactful communication solutions that elevate your 
                        brand and engage your audience effectively.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseThree" 
                        aria-expanded="false" 
                        aria-controls="collapseThree"
                        >
                            How does Hill and Knowlton approach client confidentiality? #3
                        </button>
                    </h2>
                    <div 
                    id="collapseThree" 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#accordionExample"
                >
                        <div className="accordion-body">
                        Client confidentiality is a paramount 
                        priority at Hill and Knowlton. We uphold 
                        stringent privacy protocols to safeguard 
                        any information shared with us during our 
                        collaborations. Our commitment to maintaining 
                        the confidentiality and trust of our clients is 
                        unwavering. Rest assured, your sensitive information 
                        is treated with the utmost care and is only accessible 
                        to the necessary personnel directly involved in your project. 
                        We prioritize transparency and adhere to industry best practices 
                        to ensure that your privacy is protected at all times.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;