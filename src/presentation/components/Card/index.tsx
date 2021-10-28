import React, { useState } from "react";
import { Movie } from "../../../domain/entities/movie";
import { Card, Details, Rating, SkeletonLoading } from "./style";

import { AiFillStar } from "react-icons/ai";

export const CardComponent: React.FC<Movie> = (props: Movie) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <Card>
      <img
        src={props.image}
        alt={props.fullTitle}
        onLoad={() => setImageLoaded(true)}
        data-loaded={imageLoaded}
      />
      {!imageLoaded && <SkeletonLoading />}
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
