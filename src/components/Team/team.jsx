import React from 'react'
import './team.css';
import Ceo from '../../assets/CeoDaltech.jpg';   
import DCeo from '../../assets/DeputyDaltech.jpg';  
import Staff from '../../assets/Daltechstaff.jpg';  
function Team() {
  return (
   <section id='team'>
    <span className="teamTittle">Meet Our Team</span>
    <span className="teamDesc">Our team is always committed to serve you well and satisfy all your software needs. Below are out top level team members with experience in web design, development,testing and leadership in the company.</span>
<div className="teamBars">
    <div className="teamBar">
    <img src={Ceo} alt="Ceo" className="teamImg"/>
          <div className="teamBarText">
            <h2>Dalienst Sam |Chief Executive Officer;Senior Web Developer.</h2>
            <p>Meet our CEO who is also the senior web developer, a pro expert in web technologies like HTML, CSS, JavaScript, PHP, SQL and more.He oversees the company’s web presence, including internet and intranet sites and is a great team leader.</p>  
          </div>
          </div>
    <div className="teamBar">  
    <img src={DCeo} alt="DCeo" className="teamImg"/>
          <div className="teamBarText">
            <h2>Maroko Diaz |Vice Chair;Web Designer, Front-end Engineer.</h2>
            <p>Maroko is not just a typical Vice Chair. With a passion for pixels and a flair for front-end magic, he's been shaping the digital landscape for over a decade. As a web designer, Maroko crafts interfaces that blend aesthetics with usability. Their eye for detail ensures every button, gradient, and animation feels just right.His code dances seamlessly across browsers. They’re the reason our website loads lightning-fast and looks stunning on any device.</p>  
          </div>
    </div>

    <div className="teamBar">
    <img src={Staff} alt="Staff" className="teamImg"/>
          <div className="teamBarText">
            <h2>Elsa Majizi |Chief Organizing Chair, Software manager and Back-end Engineer.</h2>
            <p>Elsa is more than a leader; she’s the orchestrator of our digital symphony. As a seasoned software manager, she conducts a team of brilliant minds, harmonizing code, deadlines, and creativity.But Elsa doesn’t stop there. As a back-end engineer, she crafts the unseen magic—the server-side wizardry that powers our applications. From databases to APIs, her code hums in perfect rhythm.</p>  
          </div>
    </div>    
</div>
    
   
   </section>
  )
}
export default Team;
