import React from 'react'
import Navbar from '../components/navbar'
import Hero from "@/app/components/home/hero";

const Home = () => {
     return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
          <Navbar />
          <Hero />
    </div>
  )
}

export default Home