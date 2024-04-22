Projeto AdoptMe

Este é um projeto que utiliza Docker Compose para configurar bancos de dados e utiliza Node.js e Flask.
Pré-requisitos

Certifique-se de ter instalado o seguinte em sua máquina:

    Docker
    Docker Compose
    Node.js
    Python (para Flask)

Configuração

    Clonando o Repositório

    bash

git clone https://github.com/seu-usuario/projeto-x.git

Configurando os Bancos de Dados

Navegue até o diretório do projeto:

bash

cd projeto-x

Execute o Docker Compose para iniciar os bancos de dados (por exemplo, MySQL e MongoDB):

bash

docker-compose up -d

Configurando o Backend

    Navegue até o diretório backend:

    bash

cd backend

Instale as dependências do Node.js:

bash

npm install

Inicie o servidor Node.js:

bash

    npm start

Configurando o Frontend com Flask

    Navegue até o diretório express-adoptme:

    bash

cd ../express-adoptme

Crie e ative um ambiente virtual (recomendado):

bash

python -m venv venv
source venv/bin/activate

Instale as dependências do Flask:

bash

pip install -r requirements.txt

Inicie o servidor Flask:

bash

        python run.py

Acessando o Projeto

Após seguir os passos acima, você pode acessar o projeto em:

     Node.js: http://localhost:3000
     Flask: http://localhost:5000

Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de recebimento.
Licença

Este projeto está licenciado sob a MIT License.
