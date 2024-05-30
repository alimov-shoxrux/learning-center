import React from 'react'
import Hero from '../../components/Hero/Hero'
import Success from '../../components/Success/Success'
import Explore from '../../components/Explore/Explore'
import News from '../../components/News/News'

function Home() {
  return (
    <div>
        <Hero/>
        <Success/>
        <Explore/>
        <News/>
    </div>
  )
}

export default Home