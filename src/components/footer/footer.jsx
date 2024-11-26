import React from 'react'
import './footer.css'
function footer() {
  return (
    <>
    <footer>
        <div className='icon'>
        <i class="fa-brands fa-facebook i" ></i>
        <i class="fa-brands fa-instagram i"></i>
        <i class="fa-brands fa-x-twitter i"></i>
        <i class="fa-brands fa-telegram i"></i>
        </div>
        <p>&copy; 2024 Travely Blog. All Rights Reserved.</p>
        <ul className='ul'>
            <li>Affiliate Disclosures </li>
            <li>Privacy Policy </li>
            <li>Terms Of Use</li>
        </ul>
    </footer>
    </>
  )
}

export default footer