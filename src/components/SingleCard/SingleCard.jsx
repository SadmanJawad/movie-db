import React from "react";

const SingleCard = ({movie}) => {
    // console.log(props);
    // const {movie} = props;
    console.log(movie)

  return (
    <div className="movie-card card text-center m-auto w-100 col-md-6">
      <div className="movie-poster w-25 m-auto">
        <img
          className="w-75"
          src={movie.poster}
          alt=""
        />
        <h3>{movie.movieName}</h3>
        <p>
          {movie.description}
        </p>
        <div className="timeAndRating d-flex justify-content-around">
          <p>Watch Time: {movie.watchTime}</p>
          <p>Imdb Rating: {movie.imdbRating}</p>
        </div>
        <button className="btn btn-info w-75 m-auto">Book Now</button>
      </div>
    </div>
  );
};

export default SingleCard;
