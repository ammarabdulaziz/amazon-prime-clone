import React, { useEffect, useState } from "react";
import "./slider.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/constant";

function Slider(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${props.url}`).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      <div className="slider">
        <p className="slider-head">{props.title}</p>
        <div className="posters">
          <div className="next-btn d-flex align-items-center justify-content-end">
            <img src="images/next.svg" className="next-img" alt="logo" />
          </div>
          {movies.map((movie, index) => {
            return (
              <img
                className="poster"
                key={index}
                src={`${imageUrl + movie.backdrop_path}`}
                alt="image"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider;
