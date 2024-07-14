import { CardIcon, CardTitle, CardWrapper } from "./style";

const GenericCard = ({ t, icon, iconWidth, iconHeight, title, ...prop }) => {
  return (
    <CardWrapper type={t} {...prop}>
      {icon && <CardIcon src={icon} w={iconWidth} h={iconHeight} />}
      {title && <CardTitle>{title}</CardTitle>}
    </CardWrapper>
  );
};

export default GenericCard;
