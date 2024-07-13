import React from "react";
import { Container } from "./style";
import { Flex, Image, Space } from "antd";

const Section = ({ flexd, center, imgWidth, imgHeight, imgSrc }) => {
  return (
    <Container>
      <Space>
        <Flex>
            
        </Flex>
        <Flex>
          <Image
            src={imgSrc}
            width={imgWidth}
            height={imgHeight}
            preview={false}
          />
        </Flex>
      </Space>
    </Container>
  );
};

export default Section;
