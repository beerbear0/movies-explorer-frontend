import { useState, useEffect } from 'react';
import {IMAGE_URL} from "../../utils/const";

function MoviesCard ({ movie, isSavedMoviePage, onSaveMovie, onUnSaveMovie, isSave, savedMovies }) {
  const [movieLikeStatus, setMovieLikeStatus] = useState (false)

  useEffect(() => {
    if(savedMovies.some(film => movie.movieId === film.movieId)) {
      setMovieLikeStatus(true);
    }
  }, [])

  function handlerLikeMovie() {
      const isLiked = savedMovies.some(film => movie.movieId === film.movieId)
      console.log(isLiked)
      if(isLiked) {
        onUnSaveMovie(movie._id)
        setMovieLikeStatus( false)
      }
      else {
        onSaveMovie(movie);
        setMovieLikeStatus(true)
      }
    }

    return (
        <div className='card'>
          <a
          href={isSavedMoviePage ? movie.trailer : movie.trailerLink}
          target='_blank'
          rel='noreferrer'>
          <img
                src={ isSavedMoviePage ? movie.image : `${IMAGE_URL}${movie.image.url}`}
                alt={movie.nameRU}
                className='card__image'/>
          </a>
            <div className='card__container'>
                <h3 className='card__title'>{movie.nameRU}</h3>

              {isSavedMoviePage ? (<button
                className='card__like card__delete'
                aria-label='Удалить фильм'
                onClick={handlerLikeMovie}
                type='button'
                />) : (<button
                className={`card__like ${movieLikeStatus ? 'card__like_active' : 'card__like_disable'}`}
                aria-label='Сохранить фильм'
                onClick={handlerLikeMovie}
                type='button'
                />
                )}

            </div>
            <p className='card__time'>{movie.duration}</p>
        </div>
    )
}

export default MoviesCard;