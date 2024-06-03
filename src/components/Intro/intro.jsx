import React from 'react'
import './intro.css';
import bg from '../../assets/Dalle.jpg';
import btnImg from '../../assets/work.png';
import { Link } from 'react-scroll';
function Intro() {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">We're <span className="introName">Daltech Software Solutions,</span><br/>Software Engineers✨</span>
        <p className="introPara">Is your organization the next success story? Let Daltech unlock your untapped<br/> potential. The future is coding - don't get left behind!</p>
        <Link><button className="btn"><img src={btnImg} alt="Work with us"className='btnImg'/>Work with Us</button></Link>

    </div>
    <img src={bg} alt="Profile" className="bg"/>

   </section>
  )
}

export default Intro;
