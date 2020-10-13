import React from "react";

const CarFigure = ({ src, alt, caption }) => {
  return (
    <figure className="photo">
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default CarFigure;
