import Count from "./Count";
import Title from "../../components/Generic/Title/Title";
import teamImage from "../../assets/images/team-section.svg";
import {
  Container,
  LeftContent,
  RightContent,
  RightImage,
  SectionWrapper,
  TeamText,
} from "./style";

const Team = () => {
  return (
    <Container>
      <SectionWrapper>
        <LeftContent>
          <Title mb="42px">Team</Title>
          <TeamText>
            For each project, we form a team that includes a project manager,
            business analyst, UI / UX designer, DevOps, QA engineer, backend and
            front-end developers.
          </TeamText>
          <Count />
        </LeftContent>
        <RightContent>
          <RightImage
            src={teamImage}
            width="100%"
            preview={false}
            alt="Image not found"
          />
        </RightContent>
      </SectionWrapper>
    </Container>
  );
};

export default Team;
