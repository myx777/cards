import { ReactNode } from "react";
import CardProps from "./CardProps";

type CardWithChildrenProps = CardProps & {
  children?: ReactNode;
};

export default CardWithChildrenProps;