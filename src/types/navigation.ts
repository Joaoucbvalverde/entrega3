export type RootStackParamList = {
  Login: undefined;
  Home: { role: 'Público' | 'Leitor' | 'Autor' | 'Editor' | 'Super Admin' };
  Cadastro: undefined;
  Detalhes: { id: string };
  BuscaUF: undefined;
  BuscaTag: undefined;
};