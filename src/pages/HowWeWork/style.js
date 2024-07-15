import { Steps } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 90px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
`;

export const StepsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const StepsBox = styled(Steps)`
  margin-top: 40px;
`;
