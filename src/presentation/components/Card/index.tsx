import React from "react";
import { Movie } from "../../../domain/entities/movie";
import { Card, Details, Rating } from "./style";

import { AiFillStar } from "react-icons/ai";

export const CardComponent: React.FC<Movie> = (props: Movie) => {
  return (
    <Card>
      <img src={props.image} alt={props.fullTitle} />
      <Details>
        <h3>{props.title}</h3>
        <Rating>
          <AiFillStar color="yellow" />
          <span>
            {props.imDbRating
              ? `${props.imDbRating} (${props.imDbRatingCount})`
              : "No vote"}
          </span>
        </Rating>
        <p>{props.crew}</p>
      </Details>
    </Card>
  );
};
