import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://dry-spire-17726.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className="container my-5">
                <div className="text-center">
                    <h2 className="fw-bold fs-1 text-muted">Our Services</h2>
                </div>
                <div className="service-container">
                    <div className="row">
                        {
                            services.map(service => <div className="col-md-4 my-3 mb-5 rounded shadow" key={service._id}>
                                <div className="img-div">
                                    <img className="rounded" src={service.img} alt="" />
                                </div>
                                <h4 className="text-center bg-primary text-light mb-2">{service.country}</h4>
                                <div className="container">
                                    <h4>{service.title}</h4>
                                    <p className="text-uppercase text-danger">starts from {service.cost} per person</p>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="bg-secondary rounded text-light px-1 rounded"><small>{service.country}</small></p>
                                        </div>
                                        <Link to={`/services/${service._id}`}>
                                            <p className="see-more"><span style={{ fontSize: '20px' }}>view details </span><i className="fas fa-arrow-right"></i></p>
                                        </Link>
                                    </div>
                                    <Link to={`/services/confirmOrder/${service._id}`}>
                                        <button className="btn btn-primary mb-3">Book Now</button>
                                    </Link>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;