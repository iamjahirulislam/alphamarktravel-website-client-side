import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="pt-2 col-lg-4 col-md-4 mt-3">
                <h2>Alphamark Travel</h2> <br />
                <p>Alphamark Travel is one of the first agencies in Qatar to provide services not only for homes, but also for schools, companies, construction sites, factories, institutions and other establishments.The company seeks excellence to provide travel services whether long-term or short-term through specialized teams who are carefully selected and licensed here in Qatar from the Ministry of Travel.</p>
            </div>
            <div className="text-center pt-2 col-lg-4 col-md-4 mt-3">
                <h2>Official Address</h2> <br />
                <div className="d-flex align-items-center justify-content-center">
                    <div className="me-5 text-end">
                        <p>	Doha, Qatar <br />	Po Box 901106</p>
                    </div>
                    <div className="text-start">
                        <p>Phone: 	009744806382 <br /> Mail: alphamark@gmail.com</p>
                    </div>
                </div>

                <div>
                    <a className="social-icon" href="https://www.facebook.com/iamjahirulislam" target="_blank"><i className="fab fa-facebook-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://twitter.com/iamjohirul" target="_blank"><i className="fab fa-twitter-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://www.instagram.com/iamjahirulislam/" target="_blank"><i className="fab fa-instagram-square fa-3x m-2"></i></a>
                    <a className="social-icon" href="https://www.linkedin.com/in/jahirul-islam-9789091b3/" target="_blank"><i className="fab fa-linkedin fa-3x m-2"></i></a>
                </div>
                <div>
                    <p> &#169; 2021 Copyright:Alpha company</p>
                </div>
            </div>
            <div className="pt-2 col-lg-4 col-md-4 mt-3">
                <h4 className="text-center text-uppercase mb-3">Quick Links</h4>
                <div className="quick-links text-center">
                    <Link to="/home#home" className="navItems">Home</Link>
                    <Link to="/home#services" className="navItems">Services</Link>
                    <Link to="/doctors" className="navItems">Doctors</Link>
                    <Link to="/healthTips" className="navItems">HealthTips</Link>
                    <Link to="/about" className="navItems">About Us</Link>
                </div>
            </div>

        </div>
    );
};


export default Footer;