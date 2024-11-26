import React from 'react'
import './destination.css'
import Des1 from '../asset/des1.jpg'
import Des2 from '../asset/des2.jpg'
import Des3 from '../asset/des3.jpg'
import Des4 from '../asset/des4.jpg'

function destination(props) {
  return (
    <>
    <div className='destination'>
        <h1>Blog </h1>
       <p className='p'>Recent travel blog posts</p>
       
       <div className='des1'>
       
       <div className='text1'>
       <h1>How To Visit Khao Sok National Park In Thailand</h1>
        <p >One of the best places to see nature and animals in Thailand is at the Khao Sok National Park, which is not too far from Phuket and Krabi.

We spent 3 days at Khao Sok and had a blast. The turquoise lake is really nice, and it’s easy to see animals in the park. We even saw wild elephants!

The best way to experience Khao Sok is to spend several days at the park, exploring the lake by boat, trekking to see animals and caves in the jungle, and staying at least one night in a floating bungalow on the lake.

In this travel guide, I’ll explain how to visit Khao Sok with or without a tour, and all of the top things to see and do there!</p>
        </div>
        <div className='img1'> 
          <img src={Des1} alt="img" />
          <img src={Des2} alt='img'/>
        </div>
        

       </div>
       <div className='des2'>
       
       <div className='text2'>
       <h1>Ternate Island Travel Guide & Best Things To Do (Maluku)</h1>
        <p >Ternate is a small, cone-shaped volcanic island in the North Maluku province of Indonesia. It isn’t likely to ever become a big vacation spot for tourists, but it has some interesting sights and history.

During the 16th century, Ternate was one of the most important kingdoms in the ‘Spice Islands’ of the Moluccas, and European powers fought over control of the spice trade here. Even today, this little island is still the main gateway to the North Maluku province.

If you ever happen to be passing through Ternate on the way to somewhere else in Indonesia, it’s worth checking out.

Here’s a travel guide for some of the best things to see and do on the island!</p>
        </div>
        <div className='img2'> 
          <img src={Des3} alt="img" />
          <img src={Des4} alt='img'/>
        </div>
        

       </div>
    </div>
    </>
  )
}

export default destination