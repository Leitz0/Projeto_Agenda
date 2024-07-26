import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Form, Pagination } from 'react-bootstrap';
import { Contato, ApiResponse } from '../types/Contato';
import { findAllContatos, findNameContatos } from '../api/contato';
import  '../css/ListContact.css';

const ListContacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contato[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contato[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchName, setSearchName] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [size] = useState<number>(20);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchContacts = async (page: number, size: number, name?: string) => {
    setLoading(true);
    try {
      const data: ApiResponse<Contato> = name 
        ? await findNameContatos(name, page, size) 
        : await findAllContatos(page, size);
      setContacts(data.content);
      setFilteredContacts(data.content); // Atualiza filteredContacts também
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Erro ao buscar contatos:', error);
      setContacts([]); 
      setFilteredContacts([]); 
      setTotalPages(0); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts(page, size, searchName);
  }, [page, size, searchName]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (searchName.trim() === '') {
        // Se a busca estiver vazia, mostre todos os contatos
        const data: ApiResponse<Contato> = await findAllContatos(page, size);
        setFilteredContacts(data.content);
      } else {
        // Caso contrário, mostre os contatos filtrados pelo nome
        const data: ApiResponse<Contato> = await findNameContatos(searchName, page, size);
        setFilteredContacts(data.content);
      }
      setPage(0); // Reset page to 0 when searching
    } catch (error) {
      console.error('Erro ao buscar contatos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <Form onSubmit={handleSearchSubmit}>
        <Form.Group controlId="formSearch">
          <Form.Label>Buscar por Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome para buscar"
            value={searchName}
            onChange={handleSearchChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Apelido</th>
                <th>Celular</th>
                <th>Data de Nascimento</th>
                <th>Email</th>
                <th>Empresa</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.nome}</td>
                  <td>{contact.apelido}</td>
                  <td>{contact.celular}</td>
                  <td>{new Date(contact.dataNascimento).toLocaleDateString()}</td>
                  <td>{contact.email}</td>
                  <td>{contact.empresa}</td>
                  <td>{contact.telefone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(0)} disabled={page === 0} />
            <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={page === 0} />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item key={i} active={i === page} onClick={() => handlePageChange(i)}>
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handlePageChange(page + 1)} disabled={page === totalPages - 1} />
            <Pagination.Last onClick={() => handlePageChange(totalPages - 1)} disabled={page === totalPages - 1} />
          </Pagination>
        </>
      )}
      <Button variant="primary" href="/create">
        Criar Novo Contato
      </Button>
    </Container>
  );
};

export default ListContacts;
