import React, { useState } from "react";
import { Container, GenericTitle } from "../../components/Generic/Left/style";
import { ContentWrapper } from "../../components/Generic/Right/style";
import { Card, Radio } from "antd";
import toolsCardData from "../../utils/tools";
import { LargeRadio, ToolsCardWrapper } from "./style";
const { Meta } = Card;

const Tools = () => {
  const [category, setCategory] = useState(null);

  const categoryChane = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Container>
      <ContentWrapper>
        <GenericTitle>Tools</GenericTitle>
        <Radio.Group onChange={categoryChane} value={category}>
          <LargeRadio.Button value="Frontend">Frontend</LargeRadio.Button>
          <LargeRadio.Button value="Backend">Backend</LargeRadio.Button>
          <LargeRadio.Button value="Devops">Devops</LargeRadio.Button>
          <LargeRadio.Button value="Testing">Testing</LargeRadio.Button>
          <LargeRadio.Button value="UX/UI">UX/UI</LargeRadio.Button>
          <LargeRadio.Button value="Infrastructure">
            Infrastructure
          </LargeRadio.Button>
          <LargeRadio.Button value="Mobile">Mobile</LargeRadio.Button>
        </Radio.Group>
        <ToolsCardWrapper>
          {toolsCardData.map((tool) => (
            <Card
              key={tool.id}
              className={tool.category === category ? "selected-card" : null}
              hoverable
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: 120,
                height: 120,
              }}
              cover={
                <img
                  alt={tool.title}
                  src={tool.icon}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "contain",
                    margin: "auto",
                    padding: 10,
                  }}
                />
              }
            >
              <Meta title={tool.title} />
            </Card>
          ))}
        </ToolsCardWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Tools;
