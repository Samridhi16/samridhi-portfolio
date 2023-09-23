import React from 'react'
import './hero-section.css'
import SocialButtons from './SocialButtons'

export const HeroSection = () => {
  return (
    <div className="hero-container" style={{ fontFamily: 'sans-serif' }}>
      <h4>Hi there!👋🏻 I'm</h4>
      <h1>Samridhi Pramanik</h1>
      <p>Passionate software developer dedicated to crafting elegant solutions that fuel innovation and provide exceptional user experiences.</p>
      <SocialButtons />
    </div>
  )
}
