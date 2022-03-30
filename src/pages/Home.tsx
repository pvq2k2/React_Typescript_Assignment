import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/header';
import Nav from '../components/Nav';
type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Nav />
      <Footer />
    </div>
      
  )
}

export default Home