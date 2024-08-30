# Projeto Dockerizado com Backend e Frontend

Este projeto consiste em uma aplicação web composta por um backend construído com Spring Boot e MySQL e um frontend desenvolvido usando Vite com TypeScript. A aplicação é containerizada usando Docker e gerenciada com Docker Compose.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados em seu sistema:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Estrutura do Projeto

- `backend/`: Contém o código do backend desenvolvido em Spring Boot.
- `frontend/vite-project/`: Contém o código do frontend desenvolvido com Vite e TypeScript.
- `docker-compose.yml`: Arquivo de configuração para iniciar todos os containers necessários.
- `Dockerfile`: Arquivos Dockerfile para construir imagens de backend e frontend.
- `run-docker.sh`: Script para construir e iniciar os containers.
- `stop-docker.sh`: Script para parar e remover os containers.

## Como Iniciar a Aplicação

1. Clone o repositório para o seu diretório local:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. Construa e inicie os containers usando o script `run-docker.sh`:

   ```bash
   ./run-docker.sh
   ```

   Este script irá executar os seguintes passos:

   - Construir as imagens Docker para o backend e frontend.
   - Iniciar os containers do MySQL, backend e frontend.

3. Acesse a aplicação:

   - **Frontend**: Abra o navegador e vá para `http://localhost:5173`
   - **Backend**: A API estará disponível em `http://localhost:8000`
   - **MySQL**: O banco de dados MySQL estará disponível na porta `3838`, e você pode se conectar a ele usando as credenciais:
     - Usuário: `root`
     - Senha: `root`
     - Banco de Dados: `products`

## Como Parar a Aplicação

Para parar e remover todos os containers, use o script `stop-docker.sh`:

```bash
./stop-docker.sh
```
