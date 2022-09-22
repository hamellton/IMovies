import React from "react";
import { ICard } from "./Card.type";

function Card({ card }: { card: ICard}) {
  const { img, filmTitle, filmDescription, link  } = card

    
  return (
      <div variant="card.sizeCard">
        
        <div variant="card.imgCard">
          <img
            src={img.src}
            alt={img.alt}
          />
        </div>

        <div variant="card.nameFilm">
          <h2>{filmTitle}</h2>
        </div>

        <div variant="card.underline underline.noMargin underline.thick"></div>

        <div variant="card.movieDescription">
          <h3>{filmDescription}</h3>
        </div>

        <div variant="card.linkFilm">
          <a href={link}>Open</a>
        </div>
      </div>    
  );
}

export default Card;
