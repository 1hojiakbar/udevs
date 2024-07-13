import { Flex, Space, Typography } from "antd";
const { Title, Text } = Typography;
import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: max-content;
`;

export const ContentWrapper = styled(Space)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  gap: 15px;
`;

export const GenericTitle = styled(Title)`
  max-width: 800px;
  font-size: 64px;
  line-height: 64px;
  font-weight: 800;
  margin-bottom: 42px;
  color: var(--primary);
`;

export const GenericText = styled(Text)`
  font-size: 24px;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 26px;
  color: var(--dark);
`;

export const SubCardSection = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SubCardTitle = styled.h4`
  font-size: 32px;
  line-height: 40px;
  font-weight: 800;
  color: var(--secondary);
`;
