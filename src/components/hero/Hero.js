import React from 'react'
import { Wrapper } from './Hero.css'
import HeroImg from '../../images/hero.png'

function Hero() {
  return (
    <Wrapper>
      <div className='left'>
        <img src={HeroImg} alt='hero'/>
      </div>
      <div className='right'>
        <h1>Mentoring <br/>Transformational <br/>Graduate</h1>
        <p>asdfasdfasdfasdfasdf</p>
      </div>
    </Wrapper>
  )
}

export default Hero