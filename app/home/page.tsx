import React from 'react'
import Navbar from '../components/navbar'
import Hero from "@/app/components/home/hero";

const Home = () => {
     return (
    <div className="h-screen lg:w-8/12 mx-auto">
          <Navbar />
          <Hero />
    </div>
  )
}

export default Home
