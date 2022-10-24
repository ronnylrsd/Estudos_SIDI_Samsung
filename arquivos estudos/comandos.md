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

- `docker images`

7 - Remove a imagem :

- `docker rmi`

8 - cria um container com a imagem específica e mapeia a porta 8080 para a porta 80 do container rodando em background :

- `docker run -d -p 8080:80 (Nome da imagem))`

9 - Inicia um container que foi fechado ou parado :

- `docker start (nome_do_container)`

10 - Mostra os logs do container (todos registro de interações com esse container) :

- `docker logs (nome_do_container)`
