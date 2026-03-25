export type Topicos = {
  id: number;
  nome: string;
  descricao?: string;
};

export type Materia = {
  id: number;
  nome: string;
  descricao?: string;
  topicos?: Topicos[]; 
};