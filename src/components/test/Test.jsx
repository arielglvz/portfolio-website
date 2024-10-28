import React from 'react'
import './test.scss'
import CarouselCard from '../ui/CarouselCard'
// images
import img1 from '../../assets/images/slider/img_1.jpg'
import img2 from '../../assets/images/slider/img_2.jpg'
import img3 from '../../assets/images/slider/img_3.jpg'
import img4 from '../../assets/images/slider/img_4.jpg'
import img5 from '../../assets/images/slider/img_5.jpg'
import { ImageSlider } from '../ui/ImageSlider'

import testImage from '../../assets/images/myproject/testimage.jpg'

const IMAGES = [
  {url: img1, alt: 'Image One'},
  {url: img2, alt: 'Image Two'},
  {url: img3, alt: 'Image Three'},
  {url: img4, alt: 'Image Four'},
  {url: img5, alt: 'Image Five'}
]

const CarouselItem = [
  {id: 1, name: 'One', url: testImage},
  {id: 2, name: 'Two', url: testImage},
  {id: 3, name: 'Three', url: testImage},
  {id: 4, name: 'Four', url: testImage},
  {id: 5, name: 'Five', url: testImage}
]

const Test = () => {
  return (
    <div className="test container" 
    style =  
    {{
      maxWidth: '400px',
      width: '100%',
      // height: '150px',
      aspectRatio: 5 / 2,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column'
    }}
    >
      <ImageSlider images = {IMAGES} />
      <CarouselCard card = {CarouselItem} />
    </div>
  )
}

export default Test