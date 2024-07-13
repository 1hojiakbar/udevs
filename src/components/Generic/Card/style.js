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
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: ${({ w }) => (w ? w : "120px")};
  height: ${({ h }) => (h ? h : "100px")};
  row-gap: ${({ xg }) => (xg ? xg : "12px")};
  border-radius: 8px;
  padding-top: ${({ pt }) => (pt ? pt : "10px")};
  padding-right: ${({ pr }) => (pr ? pr : "20px")};
  padding-bottom: ${({ pb }) => (pb ? pb : "10px")};
  padding-left: ${({ pl }) => (pl ? pl : "10px")};
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
