import styled from "styled-components";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 100px 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 60px 0 0 0;
`;

export const AddressItem = styled.div`
  display: flex;
  align-items: center;
`;

AddressItem.Icon = styled.img``;
AddressItem.Title = styled.img``;

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 98px 40px 98px;
  border: 1px solid red;
`;

export const ContactInput = styled(Input)`
  font-size: 20px;
  width: 100%;
  height: 2.5em;
  padding: 18.5px 14px;
  border: 1px solid #b4bec8;
`;

export const ContactTextArea = styled(TextArea)`
  font-size: 20px;
  width: 100%;
  height: 10em;
  padding: 5px 14px 3rem 14px;
  border: 1px solid #b4bec8;
`;
