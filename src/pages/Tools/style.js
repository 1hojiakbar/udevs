import { Radio } from "antd";
import styled from "styled-components";

export const ToolsCardWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  place-items: center;
  width: 100%;
  margin-top: 48px;
  grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px;
  gap: 12px;
  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 30px;
  }
  @media (max-width: 1360px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 30px;
  }
  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 30px;
  }
  @media (max-width: 1060px) {
    margin-top: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 900px) {
    margin-top: 50px;
    grid-template-columns: 156px 156px 156px 156px 156px;
    grid-template-rows: 54px 54px 54px 54px 54px;
    gap: 12px;
  }

  @media (max-width: 800px) {
    margin-top: 50px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .selected-card {
    background-color: var(--selectedCardBg);
  }
`;

export const LargeRadio = styled(Radio)``;
