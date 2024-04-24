import '../../styles/components/Carousel.scss'
import { useState } from 'react'
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Zoom from 'react-medium-image-zoom'
import '../../styles/components/Zoom.scss'

function Carousel({ data }) {
  const [slide, setSlide] = useState(0)
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className="Carousel">
      <FontAwesomeIcon
        className="arrow arrow-left"
        icon={faChevronLeft}
        onClick={prevSlide}
      />

      {data.map((item, index) => {
        return (
          <div
            className={slide === index ? 'slide' : 'slide slide-hidden'}
            key={index}
          >
            <Zoom classDialog="custom-zoom">
              <div
                aria-label="Screeshots du projet"
                role="img"
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'top center',
                  paddingBottom: '56%',
                  width: '100%',
                }}
              />
            </Zoom>
          </div>
        )
      })}
      <FontAwesomeIcon
        key="arrowright"
        className="arrow arrow-right"
        icon={faChevronRight}
        onClick={nextSlide}
      />
      <div className="indicators">
        {data.map((_, index) => {
          return (
            <FontAwesomeIcon
              key={index}
              className={`indicator ${slide === index ? 'active' : ''}`}
              icon={faCircle}
              onClick={() => setSlide(index)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
