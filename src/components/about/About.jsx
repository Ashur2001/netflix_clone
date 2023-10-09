import React from 'react'
import "./About.css"
import tv from "../../assist/tv.png"

function About() {
  return (
    <section>
    <div className='container about_container'>
      <div classname="about_1">
    <h1>Enjoy on your TV</h1>
    <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2></div>
    <img src={tv}alt='no' className='tv'/>
    </div>
    <div className='line'></div>
    </section>
  )
}
<section></section>

export default About