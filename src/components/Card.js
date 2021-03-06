import { StyledCard } from "./styles/Card.styled";
import React from "react";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="illustration" />
      </div>
    </StyledCard>
  );
};

export default Card;
