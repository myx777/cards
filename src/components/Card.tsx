import { FC } from "react";
import CardProps from "./type/CardProps";

// карточка товара
const Card: FC<CardProps> = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.img && <img src={props.img} className="card-img-top" alt="..." />}

      <div className="card-body">
        <h5 className="card-title">{props.h}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.buttonlink.link} className="btn btn-primary">
          {props.buttonlink.text}
        </a>
      </div>
    </div>
  );
};

export default Card;
