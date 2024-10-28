import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import { FaCircle , FaRegCircle } from "react-icons/fa";
import './imageslider.scss'

export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex(index => {
      if(index === images.length - 1) return 0;
      return index + 1;
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if(index === 0) return images.length - 1;
      return index - 1;
    })
  }
  

  return (
    <section 
      aria-label="Image Carousel " 
      style={{
        width: '100%', 
        height: '100%', 
        position: 'relative'
      }}
    >
      <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
        {images.map(({ url, alt }, index) => (
          <img 
            key={url}
            src={url} 
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}  
          />
        ))}
      </div>
      <button 
        onClick={showPrevImage} 
        className="img-slider-btn" 
        style={{ left: 0 }}
        aria-label="View Previous Image"
        >
        <IoIosArrowBack aria-hidden />
      </button>
      <button 
        onClick={showNextImage} 
        className="img-slider-btn" 
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <IoIosArrowForward aria-hidden />
      </button>

      <div 
        style={{ 
          position: 'absolute', 
          bottom: '.5rem', 
          left: '50%', 
          translate: '-50%',
          display: 'flex',
          gap: '.25rem' 
          }}>
        {images.map((_, index) => (
          <button 
            key={index} 
            className="img-slide-dot-btn" 
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index}`}
          >
            {index === imageIndex 
              ? <FaCircle aria-hidden />
              : <FaRegCircle aria-hidden/>
            }
          </button>
        ))}
      </div>
    </section>
  )
}