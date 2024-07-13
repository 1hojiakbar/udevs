import React from "react";
import { CardIcon, CardTitle, CardWrapper } from "./style";

const Card = ({ t, icon, title }) => {
  return (
    <CardWrapper type={t}>
      {icon && <CardIcon src={icon} />}
      {title && <CardTitle>{title}</CardTitle>}
    </CardWrapper>
  );
};

export default Card;
