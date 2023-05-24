import React from 'react'
import { AiOutlineMobile } from "react-icons/ai"
import { IoTvOutline, IoWaterOutline, IoNewspaperSharp } from "react-icons/io5"
import { IoIosPeople, IoMdSchool, IoIosArrowDroprightCircle } from "react-icons/io"
import { MdOutlineCurrencyRupee } from "react-icons/md"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { SiBlogger } from "react-icons/si"
import { BsFire } from "react-icons/bs"
import { RiLightbulbFlashLine } from "react-icons/ri"

const Section1 = () => {
    return (
        <>
            <div className="section1">
                <div className="icons row m-0">
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <AiOutlineMobile className='icon' />
                        <p className="iconText">Prepaid Mobile Recharge</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <IoTvOutline className="icon" />
                        <p className="iconText">DTH Recharge</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <MdOutlineCurrencyRupee className='icon' />
                        <p className="iconText">Loans</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <HiOutlineSpeakerphone className='icon' />
                        <p className="iconText">Promotions</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <IoNewspaperSharp className='icon' />
                        <p className="iconText">News</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <SiBlogger className='icon' />
                        <p className="iconText">Blog</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <IoIosPeople className='icon' />
                        <p className="iconText">Jobs</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <BsFire className='icon' />
                        <p className="iconText">Gas Booking</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <RiLightbulbFlashLine className='icon' />
                        <p className="iconText">Electricity  Bill</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <IoWaterOutline className='icon' />
                        <p className="iconText">Water Bill</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <IoMdSchool className='icon' />
                        <p className="iconText">Eductaion Loan</p>
                    </div>
                    <div className="iconDiv col-lg-3 col-md-3 col-sm-4 col-6 d-flex flex-column">
                        <IoIosArrowDroprightCircle className='icon' />
                        <p className="iconText">See More..</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
