import React, { useContext } from 'react';
import API from '../../API';
import PropTypes from 'prop-types';
import Thumb from '../Thumb';
import Rate from '../Rate';
import { API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpg';
import { Wrapper, Content, Text } from './MovieInfo.styles';
import { Context } from '../../context';

const MovieInfo = ({ movie }) => {
  // const [user] = useContext(Context);

  // const handleRating = async value => {
  //   const rate = await API.rateMovie(user.sessionId, movie.id, value);
  //   console.log(rate);
  // };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>
            {movie.title}
          </h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>


          <div className="rating-directors">
            <div>
              <h3> RATING</h3>
              <div className="score">{Math.floor(movie.vote_average)}</div>
            </div>
            <div className='director'>
              <h3>DIRECTOR :
                <p> SpielBerg</p>
                {/* (<p>{movie.directors[0].name} </p>) */}
              </h3>

            </div>
          </div>




        </Text>

      </Content>
    </Wrapper >
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object
};

export default MovieInfo;
