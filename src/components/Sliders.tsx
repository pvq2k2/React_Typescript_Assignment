import React from 'react'
import { Carousel } from 'antd';

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <button type='button' className='slick-prev-news slick-arrow 
              absolute top-[40%] left-3 translate-y-1/2 border-none w-[50px] h-[50px] 
              xl:flex justify-center items-center rounded-full 
              z-10 opacity-0 hidden transition-all duration-300 ease-linear 
              bg-white xl:group-hover:opacity-100 hover:bg-[#f26629] hover:text-white' onClick={onClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg></button>
  )
}

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <button type='button' className='slick-next-news slick-arrow
              absolute top-[40%] right-3 translate-y-1/2 border-none w-[50px] h-[50px] 
              xl:flex justify-center items-center rounded-full 
              z-10 opacity-0 hidden transition-all duration-300 ease-linear 
              bg-white xl:group-hover:opacity-100 hover:bg-[#f26629] hover:text-white' onClick={onClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg></button>
  )
}

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}
type Props = {}

const Sliders = (props: Props) => {
  return (
    <div className="box-slider
    xl:w-[1200px] xl:mx-auto xl:px-0
    px-3 mt-5 z-10">
          <Carousel className="slider w-full group" autoplay arrows {...settings}>
        <div className="slider-item">
        <a href="#">
            <img className="rounded-xl" src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248754/imgslider/banner1_koj3i0.png" alt=""/>
        </a>
        </div>
        <div className="slider-item">
        <a href="#">
            <img className="rounded-xl" src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248755/imgslider/banner2_ulbpjm.png" alt=""/>
        </a>
        </div>
  </Carousel>
    </div>

  )
}

export default Sliders