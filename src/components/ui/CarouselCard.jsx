import { useState } from "react";
import './carousel.scss'
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import { FaCircle , FaRegCircle } from "react-icons/fa";

const CarouselCard = ({ card }) => {
  const [cardIndex, setCardIndex] = useState(0);

  const showNextImage = () => {
    setCardIndex(index => {
      if(index === card.length - 1) return 0;
      return index + 1;
    })
  }

  const showPrevImage = () => {
    setCardIndex(index => {
      if(index === 0) return card.length - 1;
      return index - 1;
    })
  }

  return (
    <section
      aria-label='Carousel'
      className='carousel'
    >
      <div className="carousel__card-container">
        {card.map(({id, url, name}, index) => (
          <div 
            key={id}
            className="carousel__card-item"
            style={{ translate: `${-100 * cardIndex}%` }}  
          >
            <img src={url} alt={name} />
            <p>{name}</p>
          </div>
        ))
          
        }
      </div>
      <button 
        onClick={showPrevImage} 
        className="carousel__card-slider-btn" 
        style={{ left: 0 }}
        aria-label="View Previous Card"
        >
        <IoIosArrowBack aria-hidden />
      </button>
      <button 
        onClick={showNextImage} 
        className="carousel__card-slider-btn" 
        style={{ right: 0 }}
        aria-label="View Next Card"
      >
        <IoIosArrowForward aria-hidden />
      </button>
      <div 
        className="carousel__dots"
        style={{ 
          
          }}>
        {card.map((_, index) => (
          <button 
            key={index} 
            className="carousel__slide-dot-btn" 
            onClick={() => setCardIndex(index)}
            aria-label={`View Image ${index}`}
          >
            {index === cardIndex 
              ? <FaCircle aria-hidden />
              : <FaRegCircle aria-hidden/>
            }
          </button>
        ))}
      </div>
    </section>
  )
}

export default CarouselCard