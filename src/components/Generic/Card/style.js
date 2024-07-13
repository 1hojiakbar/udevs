import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "science":
      return {
        background: "var(--bgCard)",
        color: "var(--light)",
      };

    default:
      return {
        background: "var(--light)",
        color: "var(--light)",
      };
  }
};

export const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
  width: 120px;
  row-gap: 12px;
  padding: 10px 20px 10px 10px;
  ${getType}
`;

export const CardIcon = styled.img`
  width: 56px;
  height: 56px;
  background: transparent;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  color: var(--black);
`;
