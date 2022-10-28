# Usando imagem base do python do docker hub
FROM python

# definir o diretorio de trabalho da imagem que sera criada
WORKDIR /app/

# copia todos os arquivos do diretorio atual para o diretorio de trabalho da imagem que sera criada
COPY  . .

# instalar as dependencias do projeto necessarias para rodar o projeto
RUN pip install flask

# expor a porta 5000 da imagem que sera criada
EXPOSE 5000

# comando que sera executado quando a imagem for executada
CMD [ "python", "index.py" ]

