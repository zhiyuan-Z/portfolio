import React from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  DotGroup,
  Image,
  ImageWithZoom,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({ images }) => {
  const thumbnails = [];

  return (
    <CarouselProvider
      visibleSlides={1}
      totalSlides={images?.length}
      step={1}
      naturalSlideWidth={800}
      naturalSlideHeight={500}
      color='#ffffff'
      hasMasterSpinner
      className="my-4"
    >
      <div className="relative max-w-[800px] mx-auto my-4">
        <Slider className="">
          {images?.map((image, index) => {
            thumbnails.push(<Dot slide={index} key={index} className="mx-2"><Image src={image} className="max-w-[100px] h-auto"/></Dot>)
            return (
              <Slide index={index} key={index}>
                <ImageWithZoom src={image} />
              </Slide>
            )
          })}
        </Slider>
        <ButtonBack className="absolute top-1/2 left-0 -translate-y-1/2 h-full or-2 pl-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <circle cx="12" cy="12" r="12" fill="rgba(250,250,250,.8)" stroke="none" />
            <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
          </svg>
        </ButtonBack>
        <ButtonNext className="absolute top-1/2 right-0 -translate-y-1/2 h-full pl-2 pr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <circle cx="12" cy="12" r="12" fill="rgba(250,250,250,.8)" stroke="none" />
            <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </ButtonNext>
      </div>
      <DotGroup dotNumbers className="text-center flex flex-row items-center justify-center" renderDots={()=>(thumbnails)}></DotGroup>
      
    </CarouselProvider>
  )
};

export default Carousel;