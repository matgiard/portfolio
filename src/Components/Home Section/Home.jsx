import React from 'react'
import './home.css'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {TbChevronsDown} from 'react-icons/tb'
import {AiFillGithub} from 'react-icons/ai'
import {TbBrandTwitter} from 'react-icons/tb'

const Home = () => {
  return (
    <section id='home' className='home section'>
      <div className="leftIcons">
        <div className="socials grid">
            <a href="https://github.com/matgiard" target="_blank"><AiFillGithub className="icon" /></a>
            <a href="https://twitter.com/matgiard" target="_blank"><TbBrandTwitter className="icon"/></a>
           <div className="line"></div>
        </div>
      </div>
      
      <div className="container homeContent">
        <span className="introText">
          Hello, my name is
        </span>
        <h1 className="title">
          Mathieu Giard
        </h1>
        <span className="subTitle">
          I'am a future Web Developer.
        </span>
        
        <div className="lowerHomeSection">
          <button className='contactBtn '>
            <a className='flex'  href="#contact">
            Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>

          <div class="scrollDiv">
              <a href="#about" className='flex'> <h6 class="scroll">Scroll Down <TbChevronsDown className='icon'/></h6></a>   
           </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className='emailAddress'>
            <a href="https://mailto:matgiard.pro@gmail.com" target="_blank">matgiard.pro@gmail.com</a>
          </div>
           <div className="line"></div>
        </div>
      </div>

    </section>
  )
}

export default Home