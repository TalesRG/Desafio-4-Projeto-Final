# Projeto Final - Desafio 4

Este repositório contém o projeto final do Desafio 4, que consiste em uma aplicação completa com back-end e front-end para a criação do site do Detran.

## Estrutura do Projeto

- **detran-api**: Diretório contendo o código do back-end da aplicação.
- **detran-front**: Diretório contendo o código do front-end da aplicação.

## Como Rodar o Projeto

### Pré-requisitos

Para rodar o projeto, é necessário ter os seguintes requisitos instalados:

- **Back-end:**
  - [Docker](https://docs.docker.com/get-docker/)
  - [Node.js](https://nodejs.org/en/download/)
  - [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  
- **Front-end:**
  - [Node.js](https://nodejs.org/en/download/)
  - [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Passos para Rodar

#### Back-end
1. Certifique-se de que o Docker está instalado e em execução.
2. No diretório `detran-api`, crie um arquivo `.env` com base no `.env.example`:
   ```sh
   cp .env.example .env
   ```
   - **`cp .env.example .env`**: Copia o arquivo de exemplo `.env.example` para `.env`, garantindo que todas as variáveis de ambiente necessárias estejam configuradas corretamente.
3. Execute os seguintes comandos:
   ```sh
   docker compose up -d
   ```
   - **`docker compose up -d`**: Inicia os serviços definidos no `docker-compose.yml` em modo desacoplado (background), garantindo que os containers necessários para a aplicação sejam executados corretamente.
   
   ```sh
   npm install
   ```
   - **`npm install`**: Instala todas as dependências do projeto listadas no `package.json`, garantindo que as bibliotecas necessárias estejam disponíveis.
   
   ```sh
   npm run start:dev
   ```
   - **`npm run start:dev`**: Inicia o servidor do back-end no modo de desenvolvimento, permitindo que mudanças no código sejam refletidas automaticamente sem necessidade de reiniciar o servidor manualmente.

#### Front-end
1. No diretório `detran-front`, execute os seguintes comandos:
   ```sh
   npm install
   ```
   - **`npm install`**: Instala todas as dependências do front-end para garantir o funcionamento correto da aplicação.
   
   ```sh
   npm run dev
   ```
   - **`npm run dev`**: Inicia o servidor de desenvolvimento do front-end, permitindo que a aplicação seja acessada localmente com hot-reloading (atualização automática ao modificar o código).

## Documentação

Para mais detalhes de como o projeto foi desenvolvido, acesse a [documentação](https://talesrg.github.io/Desafio-4-Projeto-Final/).

## Repositório

O código-fonte do projeto está disponível no GitHub: [Desafio 4 - Projeto Final](https://github.com/TalesRG/Desafio-4-Projeto-Final)