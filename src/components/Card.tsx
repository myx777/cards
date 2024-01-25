// Карточка
import { FC } from "react";
import CardWithChildrenProps from "./type/CardWithChildrenProps";

const Card: FC<CardWithChildrenProps> = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.children}
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
