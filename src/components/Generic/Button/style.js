import styled from "styled-components";
import { Button } from "antd";

const getType = ({ type }) => {
  switch (type) {
    case "primary":
      return {
        background: "var(--primary)",
        color: "var(--light)",
      };

    default:
      return {
        background: "var(--primary)",
        color: "var(--light)",
      };
  }
};

const getSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "20px",
        color: "var(--light)",
      };

    case "medium":
      return {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "24px",
        color: "var(--light)",
      };

    case "large":
      return {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "30px",
        color: "var(--light)",
      };

    default:
      return {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "24px",
        color: "var(--light)",
      };
  }
};

export const GenericButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-family: var(--mulish);
  ${getSize}
  text-align: center;
  row-gap: ${({ ygap }) => ygap && ygap};
  column-gap: ${({ xgap }) => xgap && xgap};
  width: ${({ w }) => (w ? w : "100%")};
  min-width: ${({ minw }) => (minw ? minw : "0")};
  max-width: ${({ maxw }) => (maxw ? maxw : "0")};
  height: ${({ h }) => (h ? h : "40px")};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  margin-right: ${({ mr }) => (mr ? mr : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
  margin-left: ${({ ml }) => (ml ? ml : "0")};
  padding-top: ${({ pt }) => (pt ? pt : "0")};
  padding-right: ${({ pr }) => (pr ? pr : "0")};
  padding-bottom: ${({ pb }) => (pb ? pb : "0")};
  padding-left: ${({ pl }) => (pl ? pl : "0")};
  &:hover {
    transform: scale(1.07);
    transition: all 0.2s ease-in-out;
  }
  ${getType}
  &:hover {
    ${getType}
  }
`;
