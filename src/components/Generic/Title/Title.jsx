import { GenericTitle } from "./style";

const Title = ({ children, ...prop }) => (
  <GenericTitle {...prop}>{children}</GenericTitle>
);

export default Title;
