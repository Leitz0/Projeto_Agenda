import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const CreateContact: React.FC = () => {
  return (
    <Container>
      <h1>Adicionar Novo Contato</h1>
      <ContactForm />
    </Container>
  );
};

export default CreateContact;