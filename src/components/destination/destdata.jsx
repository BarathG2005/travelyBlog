import React from 'react'
import './destination.css'
import Destination from './destination'
import Des1 from '../asset/des1.jpg'
function destdata() {
  return (
    <>
    <Destination>
        <div className='dest-1'>
            <div className='dest-img'>
                <img src={Des1} alt="img" />
            </div>

        </div>
    </Destination>

    
    </>
    
  )
}

export default destdata