# Usar uma imagem base oficial do Node.js
FROM node:18

# Definir diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compilar o TypeScript para JavaScript
RUN npm run build

# Expôr a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
