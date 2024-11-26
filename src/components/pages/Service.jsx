import React from 'react'
import Nav from '../nav/nav'
import Temp from '../template/temp'
import Image from '../asset/2.jpg'
import Trips from '../trips/trips'
import Footer from '../footer/footer'
function Service() {
  return (
    <>
    <Nav/>
    <Temp title="SERVICE" cName="img-mid" bName="black-mid" Image ={Image}/>
    <Trips/>
    <Footer/>
    </>
  )
}

export default Service