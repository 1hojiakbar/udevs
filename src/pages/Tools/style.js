import styled from "styled-components";

export const ToolsCardWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  place-items: center;
  width: 100%;
  margin-top: 48px;
  grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px;
  gap: 8px;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .selected-card {
    background-color: var(--selectedCardBg);
  }
`;
