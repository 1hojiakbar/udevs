import React from "react";
import Title from "../../components/Generic/Title/Title";
import { Container, ContentWrapper, StepsBox, StepsWrapper } from "./style";
import { Steps } from "antd";
const { Step } = Steps;
import stepData from "../../utils/howWeWork";

const HowWeWorkSection = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title mb="42px">How we work</Title>
        <StepsWrapper>
          <StepsBox progressDot current={5}>
            {stepData.map((item) => {
              return (
                <Step
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </StepsBox>
        </StepsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default HowWeWorkSection;
