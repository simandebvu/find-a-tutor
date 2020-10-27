import React from "react"

export const Description = () => {

    return (
        <div className="container mt-2">
            <h6 className="text-center" style={{ color: '#a7a7a7' }}>SIMPLE AND FAST WAY TO LEARN</h6>
            <h5 className="text-center">Comfortable Education from comfortable people</h5>
            <div className="row mt-4">
                <div className="col-md-8">
                    <h3>All stats at your fingertips at any time</h3>
                    <p>You will have the best tools to manage and collect information  as and when you need it</p>
                    <input type="button" value="LEARN MORE" className='btn btn-large text-white custom-button' />
                </div>
                <div className="col-md-4">
                    <img src='https://media.giphy.com/media/d9TIXOKaA6HFm/giphy.gif' style={{ width: 200, height: 200 }} className='rounded' />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src='https://media.giphy.com/media/6NVOQr1I5H1MA/giphy.gif' style={{ width: 200, height: 200 }} className='rounded' />
                </div>
                <div className="col-md-8">
                    <h3>Only the best for your loved ones</h3>
                    <p>More than 10000 tutors at your disposal. Only the best and checked tutors. We will find the best education for you and the conditions for a safe learning environment.</p>
                    <input type="button" value="START FREE" className='btn btn-large text-white custom-button' />
                </div>
            </div>
        </div>
    )
}

export default Description;