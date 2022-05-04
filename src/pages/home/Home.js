import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Charges from '../../components/charges/Charges'
import Hero from '../../components/hero/Hero' 


import Footer from '../../components/footer/Footer'


function Home() {
  return (
    <>
    <Hero/>
    <Charges/>
    <Announcement/>
    <Footer />
    </>
  )
}

export default Home

