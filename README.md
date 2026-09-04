# RuralLink

O **RuralLink** é uma aplicação web desenvolvida com o objetivo de conectar **produtores rurais e compradores**, permitindo o cadastro e comercialização simulada de produtos agrícolas.

O projeto foi desenvolvido como uma aplicação prática, utilizando uma arquitetura separada entre **frontend** e **backend**.

---

## Funcionalidades

### Produtor

- Cadastro de produtor
- Login simulado por e-mail e código via WhatsApp
- Cadastro de produtos
- Definição de preço
- Definição de quantidade disponível
- Data da próxima colheita
- Descrição dos produtos
- Controle de estoque

### Comprador

- Cadastro de comprador
- Login
- Visualização de produtos disponíveis
- Busca e filtros
- Seleção da quantidade desejada
- Simulação de compra
- Atualização automática do estoque
- Histórico de compras

### Administrador

- Visualização de produtores
- Visualização de compradores
- Visualização de produtos
- Visualização de compras
- Informações gerais do sistema

---

# Tecnologias utilizadas

## Frontend

- JavaScript
- React
- Vite
- HTML
- CSS

## Backend

- Node.js
- Express
- API REST
- CORS

## Armazenamento

- JSON

---

# Estrutura do projeto

```text
RuralLink/
│
├── backend/
│   ├── data/
│   │   └── ruralLink.json
│   │
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── state/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── main.js
│   │
│   └── index.html
│
├── .gitignore
└── README.md
```

---

# Como executar o projeto

## 1. Pré-requisitos

Antes de executar o RuralLink, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

Para verificar se o Node.js e o npm estão instalados:

```bash
node -v
npm -v
```

---

## 2. Clonar o repositório

Abra o terminal do VS Code e execute:

```bash
git clone https://github.com/Caio22Sampaio/RuralLink.git
```

Depois entre na pasta do projeto:

```bash
cd RuralLink
```

---

## 3. Abrir o projeto no VS Code

Caso o projeto ainda não esteja aberto no VS Code:

```bash
code .
```

---

## 4. Instalar as dependências do Backend

No terminal do VS Code:

```bash
cd backend
npm install
```

---

## 5. Instalar as dependências do Frontend

Abra um **novo terminal** no VS Code e execute:

```bash
cd RuralLink/frontend
npm install
```

---

# Executando o projeto

O RuralLink precisa do **backend e frontend rodando ao mesmo tempo**.

## Backend

No primeiro terminal:

```bash
cd RuralLink/backend
node src/server.js
```

Mantenha esse terminal aberto.

---

## Frontend

Abra um segundo terminal:

```bash
cd RuralLink/frontend
npm run dev
```

O Vite irá mostrar no terminal um endereço semelhante a:

```text
http://localhost:5173
```

Abra esse endereço no navegador.

---

# Resumo para executar

Depois de clonar o projeto, você pode executar dessa forma:

### Terminal 1 — Backend

```bash
cd RuralLink/backend
npm install
node src/server.js
```

### Terminal 2 — Frontend

```bash
cd RuralLink/frontend
npm install
npm run dev
```

Depois acesse no navegador o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

---
