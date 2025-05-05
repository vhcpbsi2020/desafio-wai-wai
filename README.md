# Produtos App

Esta é uma aplicação React com TypeScript que permite listar e visualizar detalhes de produtos, utilizando a API DummyJSON para obter os dados.

## Tecnologias Utilizadas

- React
- TypeScript
- React Router (para navegação entre páginas)
- TanStack Query (React Query) para gerenciamento de dados assíncronos
- Tailwind CSS para estilização
- Styled Components para estilização de componentes específicos

## Funcionalidades

- Listagem paginada de produtos
- Visualização detalhada de produtos
- Interface responsiva
- Operações de adição, atualização e exclusão de produtos (simuladas pela API DummyJSON)

## Como Executar o Projeto

### Pré-requisitos

- Node.js (v14+)
- npm ou yarn

### Passos para Execução

1. Clone o repositório:
```bash
git clone https://github.com/vhcpbsi2020/desafio-wai-wai.git
cd produtos-app
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra o navegador e acesse `http://localhost:5173`

## Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── services/           # Serviços para comunicação com a API
├── hooks/              # Hooks personalizados
├── types/              # Definições de tipos TypeScript
├── App.tsx             # Componente principal da aplicação
└── main.tsx            # Ponto de entrada da aplicação
```

## Sobre a API

Este projeto utiliza a API DummyJSON (https://dummyjson.com/) para simular um backend com dados de produtos. 
As operações de CRUD são simuladas pela API, mas não afetam realmente os dados armazenados no servidor.

## Detalhes de Implementação

- **Paginação**: A aplicação exibe 10 produtos por página e permite navegar entre as páginas.
- **Cache**: Utilizamos React Query para gerenciar o cache dos dados, evitando requisições desnecessárias ao servidor.
- **Estilo**: A maior parte da interface utiliza classes do Tailwind CSS, com um componente de botão estilizado utilizando Styled Components.
