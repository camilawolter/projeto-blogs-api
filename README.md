# Project Blogs API

Este repositório contém o projeto Blogs Api desenvolvido por [Camila Wolter](https://www.linkedin.com/in/camilawolter/) enquanto estudava na [Trybe](https://www.betrybe.com/) no módulo de BackEnd.

## Descrição 

Este projeto é uma API de blog que permite criar, ler, atualizar e excluir postagens e categorias. E também permite registrar e fazer login de usuários. Esta API é construída com Node.js, Express.js e MySQL com Sequelize ORM, além de possuir o padrão MSC.

Construído com:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [JWT](https://jwt.io/)

## Instalação

<details>
<summary>Instalação com Docker</summary>

1. Clone o repositorio

```bash
git clone git@github.com:camilawolter/projeto-blogs-api.git
```

2. Acesse a pasta do projeto

```bash
cd blogs-api
```

3. Você precisa ter o Docker e o Docker Compose instalados em sua máquina. Se você não tem, você pode baixá-lo [aqui](https://docs.docker.com/get-docker/) e [aqui](https://docs.docker.com/compose/install/).

4. Execute o seguinte comando para iniciar os contêineres e a API

```bash
docker-compose up -d
```

5. A API será executada na porta 3001. Você pode acessá-la acessando [http://localhost:3001](http://localhost:3001)

</details>

<details>
<summary>Instalação localmente</summary>

1. Clone o repositorio

```bash
git clone git@github.com:camilawolter/projeto-blogs-api.git
```

2. Acesse a pasta do projeto

```bash
cd blogs-api
```

3. Instale as dependências

```bash
npm install
```

4. Você precisa ter o MySQL instalado em sua máquina. Se você não tem, você pode baixá-lo [aqui](https://dev.mysql.com/downloads/).

5. Altere o arquivo `.env.example` para `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente

```.env
MYSQL_USER=YOUR_MYSQL_USER
MYSQL_PASSWORD=YOUR_MYSQL_PASSWORD
MYSQL_HOST=YOUR_MYSQL_HOST
MYSQL_DATABASE=YOUR_MYSQL_DATABASE
JWT_SECRET=YOUR_JWT_SECRET
API_HOST=YOUR_API_HOST
API_PORT=YOUR_API_PORT
NODE_ENV=YOUR_NODE_ENV
```

6. Execute o comando abaixo para criar o banco de dados e migrar as tabelas

```bash
npm run prestart
```

7. Execute o comando abaixo para popular o banco de dados com alguns dados

```bash
npm run seed
```

8. Execute o comando abaixo para iniciar a API

```bash
npm start # or npm run dev
```

</details>
