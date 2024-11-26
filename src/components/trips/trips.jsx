import React from 'react'
import './trips.css'
import Tripds from './tripsData'
import T1 from '../asset/t1.jpg'
import T2 from '../asset/t2.jpg'
import T3 from '../asset/t3.jpg'
function trips() {
  return (
    <>
    <div className='con'>
    <h1 className='h1'>Hikes</h1>
    <p className='p'>Bucket list hiking guides</p>
   
    <div className='card'>
       
        <Tripds image = {T1} title="EVEREST BASE CAMP TREK IN NEPAL" content = "The Everest Base Camp (EBC) trek is a dream destination for adventurers and nature enthusiasts. Nestled in the heart of the majestic Himalayas, this trek offers a once-in-a-lifetime opportunity to walk in the footsteps of legendary climbers, witness awe-inspiring landscapes, and immerse yourself in the rich culture of the Sherpa people."/>
        <Tripds image={T2} title="ANGELS LANDING HIKE IN ZION" content="The Angels Landing hike in Zion National Park, Utah, is one of the most iconic and thrilling trails in the world. With its breathtaking views and challenging terrain, this hike is an unforgettable experience for adventure seekers and nature lovers alike."/>
        <Tripds image = {T3} title="TIGER'S NEST MONASTERY HIKE IN BHUTAN" content="The Tiger's Nest Monastery, locally known as Paro Taktsang, is one of Bhutan’s most iconic landmarks. Perched dramatically on the edge of a cliff 3,120 meters (10,240 feet) above sea level, this sacred site offers breathtaking views and a deeply spiritual experience. Hiking to this magnificent monastery is both a physical challenge and a journey into Bhutan's rich culture and history."/>
    </div>
    </div>
    </>
  )
}

export default trips