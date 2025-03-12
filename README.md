<h1 align="center">🥗 Gerador de Dietas Personalizadas com Google Gemini</h1>

<div align="center">
  <img src="https://github.com/user-attachments/assets/05e9a64d-338f-4a38-97e2-c8b450c8a316" alt="página principal" width="400px" />
</div>

## 📌 Introdução  
Este projeto cria um aplicativo que gera dietas personalizadas com base nas informações do usuário, utilizando o modelo de linguagem Google Gemini. A aplicação expõe uma API REST para facilitar a integração com outros sistemas.  

## 📋 Pré-requisitos  
✔ **Node.js e npm:** Instale a versão LTS do Node.js a partir de [nodejs.org](https://nodejs.org/).  
✔ **Visual Studio Code:** Baixe e instale o VSCode em [code.visualstudio.com](https://code.visualstudio.com/).  
✔ **Conta Google Cloud:** Crie um projeto no Google Cloud e habilite a API Generative AI. Gere uma API Key e salve-a em um arquivo `.env`.  

## 🔑 Como obter a API Key do Google Gemini  

Para utilizar a API do Google Gemini, siga os passos abaixo para obter sua API Key:  

1️⃣ **Acesse o AI Studio do Google**  
   - Entre no site do [Google AI Studio](https://aistudio.google.com/) e faça login com sua conta do Google.  

   ![image](https://github.com/user-attachments/assets/86f555b9-15e8-4c92-818f-b5f14927369a)

2️⃣ **Clique no botão "Get API Key"**  
   - No painel do AI Studio, localize e clique no botão **"Get API Key"**.  

   ![image](https://github.com/user-attachments/assets/794813dc-7d84-4fec-9de6-c6bd6bcbbd17)

3️⃣ **Selecione um projeto existente no Google Cloud**  
   - Se já houver um projeto no Google Cloud vinculado à sua conta, será exibida uma lista com os projetos disponíveis. Selecione um deles.  

   ![image](https://github.com/user-attachments/assets/1cea6d4d-b923-4d28-b8bb-40b5770f7caa)

4️⃣ **Caso não tenha um projeto**  
   - Se não houver um projeto criado, será criado um projeto padrão no Google Cloud para obter a API Key.  

  ![image](https://github.com/user-attachments/assets/f4bb55b3-c516-46a6-a1c3-9f79806cb03c)

Após obter sua API Key, copie e cole no arquivo `.env` do seu projeto conforme o próximo passo.  

## ⚙️ Instalação e Configuração  

📌 **1. Clone este repositório:**  

```bash
git clone https://github.com/CristianoSFMothe/dieta-zero
```

📌 **2. Instale as dependências:**  

```bash
cd seu-repositorio
npm install
```

📌 **3. Crie um arquivo `.env` na raiz do projeto e adicione sua API Key do Gemini:**  

```bash
GEMINI_API_KEY=sua_api_key
```

📌 **4. Crie um script para desenvolvimento:**  

```json
"scripts": {
    "dev": "tsx watch src/server.ts"
  }
```

📌 **5. Inicie o servidor:**  

```bash
npm run dev
```

## 🚀 Utilização  

A API expõe um único endpoint: `/create`  

📌 **Exemplo de requisição:**  

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

## 📸 Demonstração  

<div align="center">

<img src="https://github.com/user-attachments/assets/d7dfc8b1-eba9-4805-b447-a19587d51a54" />
  
</div>

## 🤝 Contribuições  

Contribuições são bem-vindas! Por favor, abra um **pull request** com suas alterações.  

## 📜 Licença  

Este projeto está licenciado sob a **licença MIT**.  
