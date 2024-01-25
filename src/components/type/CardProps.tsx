//тип пропсов для карты товара
type CardProps = {
  img?: string;
  h: string;
  text: string;
  buttonlink: {
    link: string;
    text: string;
  };
};

export default CardProps;
