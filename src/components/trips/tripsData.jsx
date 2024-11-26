import React from 'react'

function tripsData(props) {
  return (
    <>
    <div className='t-card'>
    <div className='t-img'>
        <img src={props.image} alt="img" />
    </div>
    <div className='t-text'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
    </div>
    </>
  )
}

export default tripsData