import React, { useEffect, useState } from "react";
import "./banner.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "../../axios";
import { apiKey, imageUrl } from "../../constants/constant";

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  const properties = {
    showThumbnails: false,
    useBrowserFullscreen: false,
    showPlayButton: false,
    showFullscreenButton: false,
    showBullets: true,
    items: [
      {
        original: "images/banner.webp",
      },
      {
        original: "images/banner2.webp",
      },
      {
        original: "images/banner3.webp",
      },
    ],
  };

  if (movies.length) {
    movies.forEach((movie, index) => {
      if (index > 3) return;
      properties.items.push({
        original: imageUrl + movie.backdrop_path,
      });
    });
  }
  // return <ImageGallery items={images} />;
  return (
    <div className="overflowx">
      <div className="slider-box row">
        <div className="col-12 mb-3">
          {/* <p>{movies ? movies : ""}</p> */}
          <ImageGallery {...properties} />;
          {/* <img src="images/banner.webp" className="banner-img" alt="logo" /> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
