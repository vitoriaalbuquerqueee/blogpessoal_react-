import axios from 'axios';

// Cria a instância do Axios configurada com a URL base da API
export const api = axios.create({
  baseURL: 'https://blog-pessoal-k3fp.onrender.com'
});

/**
 * Função para cadastrar um novo usuário no sistema (não exige token).
 */
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

/**
 * Função para autenticar/logar o usuário na aplicação (não exige token).
 */
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

/**
 * Função para buscar dados no banco de dados (exige autenticação).
 */
export const buscar = async (url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

/**
 * Função para cadastrar recursos no banco de dados (exige autenticação).
 */
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

/**
 * Função para atualizar dados já existentes no banco de dados (exige autenticação).
 */
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

/**
 * Função para deletar um recurso no banco de dados (exige autenticação).
 */
export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};