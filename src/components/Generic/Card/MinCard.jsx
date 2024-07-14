import React from "react";
import { GenerciMinCard, MinCardIcon, MinCardTitle } from "./style";

const MinCard = ({ icon, title, ...props }) => (
  <GenerciMinCard {...props}>
    {icon && <MinCardIcon src={icon} />}
    {title && <MinCardTitle>{title}</MinCardTitle>}
  </GenerciMinCard>
);

export default MinCard;
