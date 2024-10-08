<h1 align="center">Dieta Zero</h1>
 
<div align="center">
  <img src="https://github.com/user-attachments/assets/05e9a64d-338f-4a38-97e2-c8b450c8a316" alt="página principal" width="400px" />
</div>

# Gerador de Dietas Personalizadas com Google Gemini

## Introdução
Este projeto cria um aplicativo que gera dietas personalizadas com base nas informações do usuário, utilizando o modelo de linguagem Google Gemini. A aplicação expõe uma API REST para facilitar a integração com outros sistemas.

## Pré-requisitos
* **Node.js e npm:** Instale a versão LTS do Node.js a partir de https://nodejs.org/.
* **Visual Studio Code:** Baixe e instale o VSCode em https://code.visualstudio.com/.
* **Conta Google Cloud:** Crie uma conta no Google Cloud e habilite a API Generative AI. Gere uma API Key e salve-a em um arquivo `.env`.

## Instalação e Configuração

1. Clone este repositório:

```bash
git clone [URL inválido removido]
```

3. Instale as dependências:

```bash
cd seu-repositorio
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua API Key do Gemini:

```bash
GEMINI_API_KEY=sua_api_key
```

4. Criei um script para desenvolvimento:

```bash
"scripts": {
    "dev": "tsx watch src/server.ts"
  }
```

5. Inicie o servidor:

```
npm start dev
```

## Utilização

A API expõe um único endpoint: /create

Exemplo de requisição:

```bash
curl -X POST http://localhost:3333/create \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "João",
    "gender": "male",
    "weight": 80,
    "height": 175,
    "age": 30,
    "objective": "lose_weight",
    "level": "active"
  }'
```

## Contribuições

Contribuições são bem-vindas! Por favor, abra um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a licença MIT.

<div align="center">
  <img src="https://github.com/user-attachments/assets/4b0e0f29-c2e7-44ff-a525-e4d7afd1ef1e" alt="página principal" width="300px" />

  <img src="https://github.com/user-attachments/assets/e2353693-bce7-4de3-b461-143445167d68" alt="página principal" width="300px" />

  <img src="https://github.com/user-attachments/assets/4d8715fc-ddf7-4e4e-9aea-2576831e4e48" alt="página principal" width="300px" />
 
</div>