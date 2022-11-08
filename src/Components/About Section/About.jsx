import React from 'react'
import './about.css'
import img from '../../Assets/mathieu-giard.jpg'
import {VscCloudDownload} from  'react-icons/vsc'
// import cvv from '../../Assets/FRONTEND DEVELOPER.pdf'

const About = () => {
  return (
    <section id='about' className='about section container'>
      <div class="sectionTitle">
      <span class="titleNumber">01 . </span>  
      <h5 class="titleText">About Me <div class="underline"><span></span></div></h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
          I'm a determined Web developer. I already have experience using HTML Sass Javascript and PHP to build accessible component-based web pages and systems. <br/>
          Ability to deliver quality results while collaborating in rapidly changing work environments and team compositions.
          <br/>
          A passionate person willing to learn more technologies to become a better developer than i was yesterday. So determined and result orietend.
          </h4>

          <div className="aboutBtn">
            <a className='flex' href="org-CV_MG.png" download="org-CV_MG.png" >Download CV <VscCloudDownload/></a>
          </div>
        </div>
         <div className="aboutImgDiv">
          <img className='aboutImg' src={img} alt="Mathieu Image" />
         </div>
      </div>
    </section>
  )
}

export default About