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
  justify-content: ${({ center }) => (center ? center : "space-between")};
  justify-content: center;
  width: ${({ w }) => (w ? w : "145px")};
  height: ${({ h }) => (h ? h : "120px")};
  row-gap: ${({ xg }) => (xg ? xg : "12px")};
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
