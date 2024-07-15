import Title from "../../components/Generic/Title/Title";
import Button from "../../components/Generic/Button/Button";
import {
  Address,
  AddressItem,
  ContactInput,
  ContactTextArea,
  ContactWrapper,
  Container,
  Form,
  SectionWrapper,
} from "./style";

const Contact = () => {
  return (
    <Container>
      <SectionWrapper>
        <Title mb="42px">Our Services</Title>
        <ContactWrapper>
          <Form>
            <h3>Leave us a message</h3>
            <ContactInput placeholder="Name" />
            <ContactInput placeholder="Your email" />
            <ContactTextArea placeholder="Your email" />
            <Button type="primary" maxw="200px" w="200px">
              Send
            </Button>
          </Form>
          <Address>
            <AddressItem></AddressItem>
          </Address>
        </ContactWrapper>
      </SectionWrapper>
    </Container>
  );
};

export default Contact;
