## Tecnologias

- **[NestJS](https://docs.nestjs.com/)**
    - Um framework Node.js para construir aplicações server-side escaláveis e eficientes, utilizando TypeScript e inspirado no Angular.
- **[TypeORM](https://typeorm.io/#/)**
    - Um ORM (Object-Relational Mapper) para TypeScript e JavaScript, que facilita a interação com bancos de dados relacionais.
- **[MySQL](https://dev.mysql.com/doc/)**
    - Um sistema de gerenciamento de banco de dados relacional amplamente utilizado, conhecido por sua performance e confiabilidade.
- **[Express](https://expressjs.com/en/starter/installing.html)**
    - Um framework web minimalista para Node.js, utilizado para construir APIs e aplicações web de forma rápida e simples.
- **[JWT](https://jwt.io/introduction)**
    - Um padrão aberto para autenticação e troca de informações de forma segura utilizando tokens JSON.
- **[TypeScript](https://www.typescriptlang.org/docs/)**
    - Um superset do JavaScript que adiciona tipagem estática, ajudando a evitar erros e melhorar a manutenção do código.
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)**
    - Uma biblioteca para hashing de senhas, garantindo a segurança das credenciais dos usuários.


# Endpoints da API

## AgenteDeTransitoController

### `GET /agente-de-transito/all`
Lista todos os agentes de trânsito. *(Requer autenticação)*

---

## AuthController

### `POST /auth/login`
Realiza a autenticação do usuário (login).

---

## InfracaoController

### `POST /infracao/cadastrar`
Cadastra uma nova infração. *(Requer autenticação)*

### `GET /infracao/listar`
Lista todas as infrações. *(Requer autenticação)*

### `GET /infracao/listar/tipoInfracao`
Lista todos os tipos de infração. *(Requer autenticação)*

### `GET /infracao/listar/tipoInfracao/:id`
Lista um tipo de infração específico pelo ID. *(Requer autenticação)*

---

## LocalController

### `GET /local/all`
Lista todos os locais.

### `GET /local/buscar/:id`
Busca um local específico pelo ID.

---

## ProprietarioController

### `POST /proprietario`
Cadastra um novo proprietário. *(Requer autenticação)*

### `GET /proprietario/all`
Lista todos os proprietários. *(Requer autenticação)*

---

## UsuarioController

### `POST /usuario/cadastrar`
Cadastra um novo usuário.

---

## VeiculoController

### `POST /veiculo`
Cadastra um novo veículo. *(Requer autenticação)*

### `POST /veiculo/all`
Lista todos os veículos. *(Requer autenticação)*