import React from 'react'
import "./Header.css"
import netflix from "../../assist/netflix.png"
function Header() {
  return (
    <header>
    <div className='conatiner header_container'>
      <div className='me_img'>
    < img src={netflix}alt=" no image"/>
    </div>

    <div className='log'>
   <div classname="sel">
<select id="cars">
  <option value="English">English</option>
  <option value="Hindi">Hindi</option>
 </select>
 </div>



<div className='btn'>
 <a href='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1' target='_blank'>Sign in</a>
 </div>
    </div>
   
      <h1>
      Unlimited movies, TV shows and more
      </h1>
      <h2>Watch anywhere. Cancel anytime</h2>
      <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
      <input type="email" className='but' id="ee" placeholder='email adddress' required/>
      <button  type='submit' className='get' id="ee">Get started</button>

    </div>
    <div className='line'>
      <h2> </h2>
    </div>
    </header>
  )
}

export default Header
