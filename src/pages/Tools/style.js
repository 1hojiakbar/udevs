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

export const LargeRadio = styled(Radio)`
  .ant-radio {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid blue;
  }

  .ant-radio-inner {
    width: 25px;
    height: 25px;

    &:after {
      width: 30px;
      height: 30px;
      margin: -15px -18px -14px -14.5px;
    }
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #ffffff;
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: #ffffff;
  }

  .ant-radio-wrapper {
    font-size: 24px; /* Increase font size for the label */
  }
`;
