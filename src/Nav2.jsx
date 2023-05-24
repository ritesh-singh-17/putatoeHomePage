import React from 'react'
import { MdLocationOn, MdAddShoppingCart } from "react-icons/md"
import { BsBellFill } from "react-icons/bs"

const Nav2 = () => {
    return (
        <>
            <div className="secondNavbar d-flex justify-content-around">
                <div className="location d-flex">
                    <MdLocationOn className='locationIcon'/>
                    <div className='locationBox'> <h4 className='m-0'>Location</h4></div>
                </div>
                <div className="searchSection">
                    <form className="d-flex justify-content-center">
                        <input className="form-control" type="search" placeholder="Search for the products" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
                <div className="notificationCart d-flex justify-content-end">
                    <BsBellFill className='bellCartIcon'/>
                    <MdAddShoppingCart className='bellCartIcon'/>
                </div>
            </div>
        </>
    )
}

export default Nav2
