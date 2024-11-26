import React, { useState } from 'react'
import './nav.css'
import {menu} from './menu'
import {Link} from 'react-router-dom'

function nav() {
 const [ismenu,setIsmenu] = useState(true)
  return (
    <div className='container'>
        <div className='nav-logo'>Travely</div>

        <div>
          {ismenu? <i className="fa-solid fa-bars bar-icon" onClick={()=>setIsmenu(!ismenu)} ></i>:
       
        <i className="fa-solid fa-xmark wrong" onClick={()=>setIsmenu(!ismenu)}></i>}
            <ul className={`${ismenu?"nav-menu":"nav-menu-a"}`}>
                { menu.map((menu , index)=>( 
                    <li key={index}><Link className={menu.cName} to={menu.url}><i  className={menu.i}></i>{menu.title}</Link></li>    
                ))}
                <button>Sign up</button>
            </ul> 

        </div>

    </div>
  )
}

export default nav