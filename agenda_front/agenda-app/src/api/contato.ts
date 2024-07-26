
import { api } from './api';
import { Contato, ApiResponse, ContatoCriacao } from "../types/Contato";

// Função para criar um novo contato
export const postContato = async (contato: ContatoCriacao) => {
  try {
    const response = await api.post('/contatos', contato);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar contato:', error);
    throw error;
  }
};

// Função para buscar todos os contatos com paginação
export const findAllContatos = async (page: number, size: number): Promise<ApiResponse<Contato>> => {
  try {
    const response = await api.get('/contatos', {
      params: {
        page,
        size
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar contatos:', error);
    return {
      content: [],
      totalPages: 0,
      totalElements: 0,
      first: true,
      last: true,
      size: 0,
      number: 0,
      numberOfElements: 0,
      pageable: {
        pageNumber: 0,
        pageSize: 0,
        sort: {
          empty: false,
          unsorted: false,
          sorted: false
        },
        offset: 0,
        unpaged: true,
        paged: false
      },
      empty: true
    };
  }
};

// Função para buscar contatos pelo nome com paginação
export const findNameContatos = async (nome: string, page: number, size: number): Promise<ApiResponse<Contato>> => {
  try {
    const response = await api.get(`/contatos/${nome}`, { 
      params: {
        page,
        size
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar contatos pelo nome:', error);
    return {
      content: [],
      totalPages: 0,
      totalElements: 0,
      first: true,
      last: true,
      size: 0,
      number: 0,
      numberOfElements: 0,
      pageable: {
        pageNumber: 0,
        pageSize: 0,
        sort: {
          empty: false,
          unsorted: false,
          sorted: false
        },
        offset: 0,
        unpaged: true,
        paged: false
      },
      empty: true
    };
  }
};