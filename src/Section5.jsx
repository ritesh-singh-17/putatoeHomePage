import React from 'react'
import img1 from './Images/cart.jpg'
import img2 from './Images/const.jpg'
import img3 from './Images/consult.jpg'
const Section5 = () => {
    return (
        <>
            <div className='section2 section4'>
                <div className="sectionTitle d-flex justify-content-center">
                    <h2>Services We Provide</h2>
                </div>
                <div className='category'>
                    <div className="categoryBody row">  
                        <a className='col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center' href="#">
                            <div className="card">
                                <img className='img-fluid' src={img1} alt="" />
                                <h4>Daily Needs</h4>
                            </div>
                        </a>
                        <a className='col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center' href="#">
                            <div className="card">
                                <img className='img-fluid' src={img2} alt="" />
                                <h4>Construction</h4>
                            </div>
                        </a>
                        <a className='col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center' href="#">
                            <div className="card">
                                <img className='img-fluid' src={img3} alt="" />
                                <h4>Consultancy</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5
