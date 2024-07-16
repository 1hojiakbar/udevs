import GenericLargeButton from "./style";

const LargeButton = ({ children, ...props }) => (
  <GenericLargeButton {...props}>{children}</GenericLargeButton>
);

export default LargeButton;
