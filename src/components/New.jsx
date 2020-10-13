import React from "react";
import Banner01 from "../assets/banner01.jpg";
import Black from "../assets/black.jpg";
import Blue from "../assets/blue.jpg";
import Red from "../assets/red.jpg";
import Silver from "../assets/silver.jpg";
import CarFigure from "./common/CarFigure";
import Article from "./common/Article";

const NewPage = () => {
  return (
    <>
      {" "}
      <figure className="banner">
        <img src={Banner01} alt="banner of a car" />
      </figure>
      <h1>New Cars</h1>
      <hr className="fadeAway" />
      <CarFigure src={Black} alt="black car" caption="SALE: $30,997" />
      <CarFigure src={Silver} alt="silver car" caption="SALE: $30,997" />
      <CarFigure src={Red} alt="red car" caption="SALE: $29,997" />
      <CarFigure src={Blue} alt="blue car" caption="SALE: $31,997" />
      <h2>Blog Topics</h2>
      <div className="blog">
        <Article
          h3="Topic 1"
          p="Elementum, sagittis adipiscing, nec et? Ridiculus, porta placerat
            ultrices odio diam in, urna phasellus in ac egestas egestas nunc,
            pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam
            ultrices dis facilisis nascetur. Pellentesque cursusnon porta, nisi
            turpis. Ultricies integer sociis etiam ultrices dis facilisis
            nascetur. Pellentesque cursus integer mauris augue enim. Add
            additional words so that it is taller than the one to the right."
        />
        <Article
          h3="Topic 2"
          p="Elementum, sagittis adipiscing, nec et? Ridiculus, porta placerat
            ultrices odio diam in, urna phasellus in ac egestas egestas nunc,
            pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam
            ultrices dis facilisis nascetur. Pellentesque cursusnon porta, nisi
            turpis. Ultricies integer sociis etiam ultrices dis facilisis
            nascetur. Pellentesque cursus integer mauris augue enim. Add
            additional words so that it is taller than the one to the right."
        />
        <Article
          h3="Topic 3"
          p="Elementum, sagittis adipiscing, nec et? Ridiculus, porta placerat
            ultrices odio diam in, urna phasellus in ac egestas egestas nunc,
            pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam
            ultrices dis facilisis nascetur. Pellentesque cursusnon porta, nisi
            turpis. Ultricies integer sociis etiam ultrices dis facilisis
            nascetur. Pellentesque cursus integer mauris augue enim. Add
            additional words so that it is taller than the one to the right."
        />
        <Article
          h3="Topic 4"
          p="Elementum, sagittis adipiscing, nec et? Ridiculus, porta placerat
            ultrices odio diam in, urna phasellus in ac egestas egestas nunc,
            pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam
            ultrices dis facilisis nascetur. Pellentesque cursusnon porta, nisi
            turpis. Ultricies integer sociis etiam ultrices dis facilisis
            nascetur. Pellentesque cursus integer mauris augue enim. Add
            additional words so that it is taller than the one to the right."
        />
        <Article
          h3="Topic 5"
          p="Elementum, sagittis adipiscing, nec et? Ridiculus, porta placerat
            ultrices odio diam in, urna phasellus in ac egestas egestas nunc,
            pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam
            ultrices dis facilisis nascetur. Pellentesque cursusnon porta, nisi
            turpis. Ultricies integer sociis etiam ultrices dis facilisis
            nascetur. Pellentesque cursus integer mauris augue enim. Add
            additional words so that it is taller than the one to the right."
        />
        <Article
          h3="Topic 6"
          p="Elementum, sagittis adipiscing, nec et? Ridiculus, porta placerat
            ultrices odio diam in, urna phasellus in ac egestas egestas nunc,
            pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam
            ultrices dis facilisis nascetur. Pellentesque cursusnon porta, nisi
            turpis. Ultricies integer sociis etiam ultrices dis facilisis
            nascetur. Pellentesque cursus integer mauris augue enim. Add
            additional words so that it is taller than the one to the right."
        />
        <Article
          h3="Topic 7"
          p="Elementum, sagittis adipiscing, nec et? Ridiculus, porta placerat
            ultrices odio diam in, urna phasellus in ac egestas egestas nunc,
            pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam
            ultrices dis facilisis nascetur. Pellentesque cursusnon porta, nisi
            turpis. Ultricies integer sociis etiam ultrices dis facilisis
            nascetur. Pellentesque cursus integer mauris augue enim. Add
            additional words so that it is taller than the one to the right."
        />
        <Article
          h3="Topic 8"
          p="Elementum, sagittis adipiscing, nec et? Ridiculus, porta placerat
            ultrices odio diam in, urna phasellus in ac egestas egestas nunc,
            pellentesque, non porta, nisi turpis. Ultricies integer sociis etiam
            ultrices dis facilisis nascetur. "
        />
      </div>
    </>
  );
};

export default NewPage;
