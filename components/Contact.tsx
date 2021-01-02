import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

import Section from "./Section";
import Button from "./Button";
import H3 from "./H3";
import H4 from "./H4";

const Row = styled.div`
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  padding: 1.5rem;
  display: grid;
  gap: 1.5rem;
`;

const Whatsapp = styled(FaWhatsappSquare)`
  color: ${(props) => props.theme.green};
`;

const Youtube = styled(FaYoutubeSquare)`
  color: ${(props) => props.theme.red};
`;

const Facebook = styled(FaFacebookSquare)`
  color: ${(props) => props.theme.blue};
`;

const Form = styled.form`
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  gap: 2rem;
`;

const Input = styled.input`
  background: #d8d8d8;
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background: #d8d8d8;
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

const FormTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Contact = () => {
  const [formData, setFormData] = useState<{
    message?: string;
    email?: string;
    name?: string;
  }>({
    message: null,
    email: null,
    name: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (!formData.email) {
      alert("Por favor, preencha o campo email do formulario");
    } else if (!formData.name) {
      alert("Por favor, preencha o campo nome do formulario");
    } else if (!formData.message) {
      alert("Por favor, preencha o campo mensagem do formulario");
    } else {
      await axios.post("/api/email", formData);
      setFormData({
        message: null,
        email: null,
        name: null,
      });
    }
  };

  return (
    <Section id="contact">
      <H3>Contato</H3>
      <H4>Entre em contato conosco e agende a sua primeira aula!</H4>
      <Row>
        <a
          target="_blank"
          href={`https://wa.me/5521999003412?text=${encodeURI(
            "Olá mestre Dilson, gostaria de saber mais informações sobre as suas aulas."
          )}`}
        >
          <Whatsapp />
        </a>
        <a target="_blank" href="http://youtube.com">
          <Youtube />
        </a>
        <a target="_blank" href="http://facebook.com">
          <Facebook />
        </a>
      </Row>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Utilize esse formulario para nos enviar um email</FormTitle>
        <Input
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome (Obrigatorio)"
          name="name"
        />
        <Input
          value={formData.email}
          onChange={handleChange}
          placeholder="Email (Obrigatorio)"
          type="email"
          name="email"
        />
        <TextArea
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensagem (Obrigatorio)"
          name="message"
          rows={6}
        />
        <Button
          disabled={
            !Object.values(formData).reduce(
              (prev, next) => Boolean(prev) && Boolean(next),
              true
            )
          }
        >
          Enviar
        </Button>
      </Form>
    </Section>
  );
};

export default Contact;
