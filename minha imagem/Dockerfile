# usar a imagem node como base para a imagem que sera criada
FROM node

# definir o diretorio de trabalho da imagem que sera criada
WORKDIR /app

# copiar o arquivo package.json para o diretorio de trabalho da imagem que sera criada
COPY package*.json .

# instalar as dependencias do projeto que estao no arquivo package.json.
RUN npm install

# copiar todos os arquivos do diretorio atual para o diretorio de trabalho da imagem que sera criada  
COPY . .

# expor a porta 3000 da imagem que sera criada
EXPOSE 3000

# comando que sera executado quando a imagem for executada
CMD [ "node", "app.js" ]