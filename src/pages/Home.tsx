import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/header';
import Nav from '../components/Nav';
import Sliders from '../components/Sliders';
type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Nav />
      <Sliders />
      <Footer />
    </div>
      
  )
}

export default Home