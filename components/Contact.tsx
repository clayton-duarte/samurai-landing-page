import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { RiLoader3Line } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
  FaCheckCircle,
} from "react-icons/fa";

import Section from "./Section";
import Button from "./Button";
import Row from "./Row";
import H3 from "./H3";
import H4 from "./H4";
import P from "./P";

const SocialLinks = styled(Row)`
  font-size: 2.5rem;
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
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
  text-align: center;
  position: relative;
  max-width: 768px;
  overflow: hidden;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  width: 100%;
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

const Overlay = styled(Section)`
  background: ${(props) => props.theme.white};
  justify-items: center;
  align-content: center;
  position: absolute;
  text-align: center;
  padding: 1.5rem;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

const CheckIcon = styled(FaCheckCircle)`
  color: ${(props) => props.theme.green};
  font-size: 4rem;
`;

const LoaderIcon = styled(RiLoader3Line)`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  font-size: 4rem;
  animation: rotate 1s infinite linear;
`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
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
    setIsLoading(true);
    if (!formData.email) {
      alert("Por favor, preencha o campo email do formulario");
    } else if (!formData.name) {
      alert("Por favor, preencha o campo nome do formulario");
    } else if (!formData.message) {
      alert("Por favor, preencha o campo mensagem do formulario");
    } else {
      await axios.post("/api/email", formData);
      setIsLoading(false);
      setIsSent(true);
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
      <SocialLinks template="repeat(3, auto)" justify="center">
        <a target="_blank" href="https://cutt.ly/GjU3xgp">
          <Whatsapp />
        </a>
        <a target="_blank" href="https://cutt.ly/0jzNwFh">
          <Youtube />
        </a>
        <a target="_blank" href="https://cutt.ly/QjU3pEt">
          <Facebook />
        </a>
      </SocialLinks>
      <Row>
        <Form onSubmit={handleSubmit}>
          {(isSent || isLoading) && (
            <Overlay>
              {isLoading && (
                <>
                  <LoaderIcon />
                </>
              )}
              {isSent && (
                <>
                  <CheckIcon />
                  <H4>Obrigado pelo seu contato!</H4>
                  <P>
                    Uma cópia desta mensagem foi encaminhada para o endereço de
                    email informado.
                    <br />
                    Entraremos em contato o mais breve possível.
                  </P>
                </>
              )}
            </Overlay>
          )}
          <FormTitle>
            Utilize esse formulário para nos enviar um email
          </FormTitle>
          <Input
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome (Obrigatório)"
            name="name"
          />
          <Input
            value={formData.email}
            onChange={handleChange}
            placeholder="Email (Obrigatório)"
            type="email"
            name="email"
          />
          <TextArea
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensagem (Obrigatório)"
            name="message"
            rows={6}
          />
          <Row justify="start">
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
          </Row>
        </Form>
      </Row>
    </Section>
  );
};

export default Contact;
