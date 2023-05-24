import React from 'react'
import CardCarousel from './CardCarousel'

const Section3 = () => {
    return (
        <>
            <div className='section2'>
                <div className="sectionTitle d-flex justify-content-center">
                    <h2>Popular Service Products</h2>
                </div>
                <div className='category'>
                    <div className="categoryTitle d-flex justify-content-center">
                        <h4>Construction</h4>
                    </div>
                    <div className="categoryBody">
                        <hr />
                        <CardCarousel
                            name1="Royal Brick"
                            name2="Dehri Bihar Morang"
                            name3="ACC Gold"
                            name4="Ultratech PPC"
                            name5="Ultratech paper bag"
                            name6="Wire"
                            name7="KJS Cement"
                            name8="Chotti Gitti"
                            name9="Gallent Sariya 8MM"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3
