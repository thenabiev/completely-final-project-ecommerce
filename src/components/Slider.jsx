import React from 'react'
import { Carousel} from 'react-bootstrap';

import { sliderData } from '../Data';



const CarouselComponent = () => {
  return (
     <Carousel className='carousel rounded my-2 '>
      
      {
        sliderData.map(item=>(
            <Carousel.Item key={item.id}
             className='img-box'>
                <img
                className="d-block"
                src={item.image}
                alt="First slide"
                />
                
            </Carousel.Item>
        ))
      }
      
    </Carousel>
  )
}

export default CarouselComponent