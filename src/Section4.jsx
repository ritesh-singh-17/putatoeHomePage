import React from 'react'
import CardCarousel from './CardCarousel'

const Section4 = () => {
    return (
        <>
            <div className='section2'>
                <div className="sectionTitle d-flex justify-content-center">
                    <h2>All Popular Service Providers</h2>
                </div>
                <div className='category'>
                    <div className="categoryTitle d-flex justify-content-center">
                        <h4>Construction</h4>
                    </div>
                    <div className="categoryBody">
                        <hr />
                        <CardCarousel
                            name1="Gangotri Building Material"
                            name2="Gangotri Devi Construction"
                            name3="Pulak Shops"
                            name4="Singh Building Material"
                            name5="Modular Kitchen- Gorakhpur"
                            name6="Suprabha Interiors"
                            name7="Apna Interior Design"
                            name8="Vivek and Accesociates"
                            name9="Gorakhpur Interiors"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4
