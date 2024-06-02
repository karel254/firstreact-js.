import React from 'react';
import './contacts.css';
import Whaimg from '../../assets/whatlog.png';
import Out from '../../assets/microlog.png';
import Offl from '../../assets/phonelog.png';
const Contacts = () => {
  return (
   <section id='contacts'>
    <span className="contactTittle">Our Contacts</span>
    <span className="contactDesc">For more services that might require online assistance or query purposes, you can contact us on the following handles.</span>
<div className="contactBars">
    <div className="contactBar">
        <img src={Whaimg} alt="Whatsapp" className="contactImg"/>
          <div className="contactBarText">
            <h2>Whatsapp</h2>
            <p>+254735626873</p>  
          </div>
          </div>

    <div className="contactBar">  
        <img src={Out} alt="Microsoft" className="contactImg"/>
          <div className="contactBarText">
            <h2>Microsoft outlook(also email)</h2>
            <p>daltechAfrica@outlook.com</p>  
          </div>
    </div>

    <div className="contactBar">
        <img src={Offl} alt="Office" className="contactImg"/>
          <div className="contactBarText">
            <h2>Phone</h2>
            <p>073354256</p>  
          </div>
    </div>    
</div>
   </section>
  );
}

export default Contacts;