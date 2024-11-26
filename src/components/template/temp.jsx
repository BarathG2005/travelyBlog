import React from 'react'
import './temp.css'
function temp(props) {
  return (
    <>
    <div className={props.cName}>
      
      <img src={`${props.Image}`} alt="" />
      
      
    </div>
    <div className={props.bName}>
    <div className='text'>
      <h1 >{props.title}</h1>
      <p >{props.content}</p>
      {props.btn}

    </div>
    </div>
    </>
  )
}

export default temp