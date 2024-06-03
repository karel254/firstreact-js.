import React from 'react'
import './skills.css';   
function Skills() {
  return (
   <section id='skills'>
    <span className="skillTittle">About Us</span>
    <span className="skillDesc">We are skilled and passionate Software engineers with experience in web design, development, and testing.We have a strong understanding of Software applications and a keen eye for detail.</span>
<div className="skillBars">
    <div className="skillBar">
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Through planning, conceptualizing, and arranging content for websites, we go beyond aesthetics to include the overall functionality of a website by being the best web architects.</p>  
          </div>
          </div>
    <div className="skillBar">  
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>We as competent web developers consider the web development trends that focuses on creating elegant, purpose-driven sites tailored to specific business goals and target audiences. Good web sites set a brand apart and drives real results.</p>  
          </div>
    </div>

    <div className="skillBar">
          <div className="skillBarText">
            <h2>Software Testing and Fixing</h2>
            <p>We ensure that a program or application functions correctly, meets requirements, and is free from defects, other software companies have been our clients and the results are always fascinating!.</p>  
          </div>
    </div>    
</div>
    
   
   </section>
  )
}

export default Skills;
