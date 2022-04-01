import React from 'react'
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/header';
import Nav from '../components/Nav';
import Sliders from '../components/Sliders';

const Home = (props: any) => {
  return (
    <div>
      <Header />
      <Nav />
      <Sliders />
      <Content getAllProducts={props.product}/>
      <Footer />
    </div>
      
  )
}

export default Home