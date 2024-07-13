import { CardIcon, CardTitle, CardWrapper } from "./style";

const GenericCard = ({ t, icon, iconSize, title, ...prop }) => {
  return (
    <CardWrapper type={t} {...prop}>
      {icon && <CardIcon src={icon} w={iconSize} h={iconSize} />}
      {title && <CardTitle>{title}</CardTitle>}
    </CardWrapper>
  );
};

export default GenericCard;
