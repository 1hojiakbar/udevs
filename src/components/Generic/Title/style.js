import styled from "styled-components";

export const GenericTitle = styled.h1`
  font-family: var(--mulish);
  font-size: ${({ size }) => (size ? size : "64px")};
  font-weight: ${({ weight }) => (weight ? weight : "800")};
  color: ${({ cr }) => (cr ? cr : "var(--primary)")};
  width: ${({ w }) => (w ? w : "max-content")};
  white-space: nowrap;
  height: ${({ h }) => (h ? h : "max-content")};
  row-gap: ${({ ygap }) => ygap && ygap};
  column-gap: ${({ xgap }) => xgap && xgap};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  margin-left: ${({ ml }) => (ml ? ml : "0")};
  padding-top: ${({ pt }) => (pt ? pt : "0")};
  padding-left: ${({ pl }) => (pl ? pl : "0")};
  margin-right: ${({ mr }) => (mr ? mr : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
  padding-right: ${({ pr }) => (pr ? pr : "0")};
  padding-bottom: ${({ pb }) => (pb ? pb : "0")};
  min-width: ${({ minw }) => (minw ? minw : "0")};
  max-width: ${({ maxw }) => (maxw ? maxw : "0")};
  @media (max-width: 900px) {
    font-size: 32px;
  }
`;
