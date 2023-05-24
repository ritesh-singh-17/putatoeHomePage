import React from 'react'
import Navbar from './Navbar'
import Nav2 from './Nav2'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from "./Section4"
import Section5 from "./Section5"
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <Navbar />
        <Nav2 />
        <Section1 />
        <Section2 />
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
      </div>
    </>
  )
}

export default HomePage
