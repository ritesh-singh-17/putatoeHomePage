import React from 'react'
import img1 from "./Images/coverBlock.jpg"

const Section2 = () => {
  return (
    <>
      <div className='section2'>
        <div className="sectionTitle d-flex justify-content-center">
          <h2>Shop By Category</h2>
        </div>
        <div className='category'>
          <div className="categoryTitle d-flex justify-content-center">
            <h4>Construction</h4>
          </div>
          <div className="categoryBody">
            <hr />
            <a href="">
              <div className="card">
                <img src={img1} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className='m-0'>Cover Block</p>
                  <p className='m-0' style={{ color: "red" }}>0% OFF</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2
