import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { postContato } from '../api/contato';
import { useNavigate } from 'react-router-dom';
import "../css/Create.css";


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    apelido: '',
    celular: '',
    dataNascimento: '', // Alterado aqui
    email: '',
    empresa: '',
    telefone: '',
  });

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await postContato(formData);
      alert('Contato criado com sucesso!');
      setFormData({
        nome: '',
        apelido: '',
        celular: '',
        dataNascimento: '', // Alterado aqui
        email: '',
        empresa: '',
        telefone: '',
      });
    } catch (error) {
      console.error('Erro ao criar contato:', error);
      alert('Erro ao criar contato');
    }
  };

  return (
    <Container>
      <h2>Criar Contato</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome completo"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formApelido">
          <Form.Label>Apelido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apelido"
            name="apelido"
            value={formData.apelido}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formCelular">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="text"
            placeholder="Celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDataNascimento">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            name="dataNascimento" // Alterado aqui
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmpresa">
          <Form.Label>Empresa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTelefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </Form.Group>
        <Row className="mt-4">
          <Col>
            <Button
              variant="secondary"
              onClick={() => navigate('/')}
              className="float-left"
            >
              Lista
            </Button>
            <Button variant="primary" type="submit" className="float-right">
              Criar Contato
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
