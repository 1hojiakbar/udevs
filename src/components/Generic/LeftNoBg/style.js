import styled from "styled-components";
import { Flex } from "antd";

const getSize = ({ type }) => {
  switch (type) {
    case "small":
      return {
        lineHeight: "25px",
        margin: "0 0 5px 0",
      };

    case "medium":
      return {
        lineHeight: "30px",
        margin: "0 0 10px 0",
      };

    case "large":
      return {
        lineHeight: "40px",
        margin: "0 0 26px 0",
      };

    default:
      return {
        background: "var(--light)",
      };
  }
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 120px 0;
  height: max-content;
  border: 1px solid blue;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  gap: 20px;
  width: 497px;
  margin: 20px 0 0 0;
`;

export const GenericTitle = styled.div`
  max-width: 900px;
  font-size: 64px;
  line-height: 64px;
  font-weight: 800;
  margin-bottom: 44px;
  color: var(--primary);
`;

export const GenericText = styled.p`
  font-size: 24px;
  font-weight: 500;
  ${getSize}
  width: ${({ w }) => (w ? w : "100%")};
  color: var(--dark);
  //
`;

export const SubCardSection = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SubCardTitle = styled.h4`
  font-size: 32px;
  line-height: 40px;
  font-weight: 800;
  margin: 26px 0 20px 0;
  color: var(--secondary);
`;

export const SubCardWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
`;

export const RightImage = styled.img``;