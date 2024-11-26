import React from 'react'
import Nav from '../nav/nav'
import Temp from '../template/temp'
import Image from '../asset/home.jpg'
import Destination from '../destination/destination'
import Trips from '../trips/trips'
import Footer from '../footer/footer'
function Home() {
  return (
    <>
    <Nav/>
    <Temp cName="img" bName="black" Image ={Image} title="EXPLORE.DREAM.DISCOVER." content="This is a world travel blog featuring beautiful destination , new experiences, hidden places around the globe." btn={<button >STRAT EXPLORING</button>}/>
    <Destination/>
    <Trips/>
    <Footer/>
    </>
  )
}

export default Home