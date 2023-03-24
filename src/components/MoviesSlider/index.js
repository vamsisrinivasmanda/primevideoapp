import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <h1 className="heading">Action Movies</h1>
      <Slider {...settings} className="movie-container">
        {moviesList.map(eachmovie => {
          if (eachmovie.categoryId === 'ACTION') {
            return (
              <ul className="action-movies">
                <MovieItem
                  image={eachmovie.thumbnailUrl}
                  videoURL={eachmovie.videoUrl}
                />
              </ul>
            )
          }
          return null
        })}
      </Slider>
      <h1 className="heading">Comedy Movies</h1>
      <Slider {...settings} className="movie-container">
        {moviesList.map(eachmovie => {
          if (eachmovie.categoryId === 'COMEDY') {
            return (
              <ul className="action-movies">
                <MovieItem
                  image={eachmovie.thumbnailUrl}
                  videoURL={eachmovie.videoUrl}
                />
              </ul>
            )
          }
          return null
        })}
      </Slider>
    </>
  )
}

export default MoviesSlider
