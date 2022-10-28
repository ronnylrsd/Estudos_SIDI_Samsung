# Comandos básicos do Docker

1 - criar um container de uma imagem específica :

- `docker run (Nome da imagem)`

2 - Cria um container com a imagem específica e abre um terminal interativo :

- `docker run -it (Nome da imagem)`

3 - Para um container específico :

- `docker stop (nome_do_container)`

4 - Remover um container específico :

- `docker rm (nome_do_container)`

5 - lista os containers em execução :

- `docker ps -a`

6 - Lista as imagens :

- `docker image ls`

7 - Remove a imagem :

- `docker rmi`

8 - cria um container com a imagem específica e mapeia a porta 8080 para a porta 80 do container rodando em background :

- `docker run -d -p 8080:80 (Nome da imagem))`

9 - Inicia um container que foi fechado ou parado :

- `docker start (nome_do_container)`

10 - Mostra os logs do container (todos registro de interações com esse container) :

- `docker logs (nome_do_container)`

11 - Para fazer o build da imagem criada :

- `docker build (Diretório da imagem)`

12 - Iniciar container com um nome personalizado :

- `docker run --name (nome que voce dará a imagem) (nome da imagem)`

13 - Dar nome a uma imagem :

- `docker tag (id da imagem) (nome para a imagem)`

14 - Para fazer o build da imagem criada dando um nome :

- `docker build -t (nome para a imagem) (Diretório da imagem)`

15 - Remover as imagens e recursos nao utilizados no container :

- `docker system prune`

16 - Copiar arquivos do docker para o pc ou vice versar :

- ``docker cp (arquivo origem/caminho relativo arquivo)`

17 - Mostrar os dados do container :

- `docker top (Nome do container)`

18 - Mostrar os dados do container em detalhes :

- `docker inspect (Nome do container)`

19 - Exibir os container que esta rodando em detalhes :

- `docker top stats`

# Criar arquivo dockerfile

**Dockerfile**

```
# usar a imagem node como base para a imagem que sera criada
FROM node

# definir o diretório de trabalho da imagem que sera criada
WORKDIR /app

# copiar o arquivo package.json para o diretório de trabalho da imagem que sera criada
COPY package*.json .

# instalar as dependências do projeto que estão no arquivo package.json.
RUN npm install

# copiar todos os arquivos do diretório atual para o diretório de trabalho da imagem que sera criada  
COPY . .

# expor a porta 3000 da imagem que sera criada
EXPOSE 3000

# comando que sera executado quando a imagem for executada
CMD [ "node", "app.js" ]
```
