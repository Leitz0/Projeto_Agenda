// Define a interface para o tipo de contato
export interface Contato {
    id: number;
    nome: string;
    apelido: string;
    empresa: string;
    telefone: string;
    celular: string;
    email: string;
    dataNascimento: string;
  }
  
  export interface ApiResponse<T> {
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    size: number;
    content: T[];
    number: number;
    numberOfElements: number;
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
      };
      offset: number;
      unpaged: boolean;
      paged: boolean;
    };
    empty: boolean;
  }
  
  export interface ContatoCriacao {
    nome: string;
    apelido: string;
    celular: string;
    dataNascimento: string;
    email: string;
    empresa: string;
    telefone: string;
  }