import React from "react";

export const Testimonials = () => {
    return (
        <div className="container mt-5">
            <h6 className="text-center" style={{ color: '#a7a7a7' }}>PEOPLE ARE REALLY ENJOYING THIS SERVICE</h6>
            <h3 className="text-center">Look at what they have to say</h3>
            <div className="row d-flex justify-content-around">
                <div className="card my-2" style={{ "width": "18rem" }}>
                    <div className='row'>
                        <img className="rounded-circle mx-auto" src="https://via.placeholder.com/100x10" alt="User Image" style={{ width: '25px', height: '50px' }} />
                    </div>
                    <div className="card-body">
                        <p className="card-text font-weight-bold">Bender</p>
                        <p>Bender is still great</p>
                    </div>
                </div>
                <div className="card my-2" style={{ "width": "18rem" }}>
                    <div className='row'>
                        <img className="rounded-circle mx-auto" src="https://via.placeholder.com/100x10" alt="User Image" style={{ width: '45px', height: '50px' }} />
                    </div>
                    <div className="card-body">
                        <p className="card-text font-weight-bold">Bender</p>
                        <p>Bender is still great</p>
                    </div>
                </div>
                <div className="card my-2" style={{ "width": "18rem" }}>
                    <div className='row'>
                        <img className="rounded-circle mx-auto" src="https://via.placeholder.com/100x10" alt="User Image" style={{ width: '25px', height: '50px' }} />
                    </div>
                    <div className="card-body">
                        <p className="card-text font-weight-bold">Bender</p>
                        <p>Bender is still great</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;