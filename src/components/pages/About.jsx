import React from 'react'
import Nav from '../nav/nav'
import Temp from '../template/temp'
import Image from '../asset/3.jpg'
import Footer from '../footer/footer'
import AboutMe from '../AboutMe'
function About() {
  return (
  <>
  <Nav/>
  <Temp cName="img-mid" bName  = "black-mid" Image ={Image} title = "ABOUT"/>
  
  <AboutMe/>
  <Footer/>
  </>
  )
}

export default About