import { Card } from "antd";
import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "science":
      return {
        background: "var(--bgCard)",
        color: "var(--light)",
      };

    case "dark":
      return {
        background: "var(--darkBgCard)",
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: ${({ w }) => (w ? w : "156px")};
  height: ${({ h }) => (h ? h : "120px")};
  gap: ${({ gap }) => (gap ? gap : "12px")};
  border-radius: 8px;
  padding-top: ${({ pt }) => (pt ? pt : "10px")};
  padding-right: ${({ pr }) => (pr ? pr : "20px")};
  padding-bottom: ${({ pb }) => (pb ? pb : "10px")};
  padding-left: ${({ pl }) => (pl ? pl : "10px")};
  /* border: 1px solid red; */
  ${getType}
`;

export const CardIcon = styled.img`
  width: ${({ w }) => (w ? w : "56px")};
  height: ${({ h }) => (h ? h : "56px")};
  background: transparent;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  color: var(--black);
`;

export const GenerciMinCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid gray;
  width: ${({ w }) => (w ? w : "100px")};
  height: ${({ h }) => (h ? h : "100px")};
  gap: ${({ gap }) => (gap ? gap : "12px")};
  border-radius: 8px;
  padding-top: ${({ pt }) => (pt ? pt : "10px")};
  padding-right: ${({ pr }) => (pr ? pr : "20px")};
  padding-bottom: ${({ pb }) => (pb ? pb : "10px")};
  padding-left: ${({ pl }) => (pl ? pl : "10px")};
  ${getType}
  @media (min-width: 1400px) {
    width: 100px;
  }
  @media (min-width: 1500px) {
    width: 110px;
  }
`;

export const MinCardIcon = styled.img`
  width: ${({ w }) => (w ? w : "25px")};
  height: ${({ h }) => (h ? h : "25px")};
  background: transparent;
`;

export const MinCardTitle = styled.p`
  font-size: 11px;
  line-height: 13px;
  white-space: nowrap;
  font-weight: 500;
  color: var(--black);
`;
