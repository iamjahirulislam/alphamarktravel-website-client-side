import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row my-5">
                    <h2 className="fs-1 fw-bold text-uppercase ">About <span className="text-danger">AlphaMark Travel</span></h2>
                    <p className="my-4">Alphamark Travel is one of the first agencies in Qatar to provide services not only for homes, but also for schools, companies, construction sites, factories, institutions and other establishments.The company seeks excellence to provide travel services whether long-term or short-term through specialized teams who are carefully selected and licensed here in Qatar from the Ministry of Travel..</p>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;