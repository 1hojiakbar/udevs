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
import addressItem from "../../utils/contact";
import { Element } from "react-scroll";
import { useMediaQuery } from "@mui/material";

const Contact = () => {
  const small = useMediaQuery("(max-width: 900px)");
  return (
    <Element name="contact">
      <Container>
        <SectionWrapper>
          <Title mb="42px">Contact</Title>
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
              {addressItem.map((value) => {
                return (
                  <AddressItem key={value.id}>
                    <AddressItem.Icon src={value.icon} />
                    <AddressItem href={value.href}>{value.title}</AddressItem>
                  </AddressItem>
                );
              })}

              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11980.625241311674!2d69.3374167!3d41.34895610000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dbb8e1f0391%3A0xd04770323fe890a5!2sUdevs!5e0!3m2!1sru!2s!4v1721040409260!5m2!1sru!2s"
                  width={!small ? "450" : "100%"}
                  height="250"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Address>
          </ContactWrapper>
        </SectionWrapper>
      </Container>
    </Element>
  );
};

export default Contact;
