# Processo Seletivo iData

## 🌐 O que é a Aplicação
Desafio técnico desenvolvido para o processo seletivo da iData.
A aplicação consiste em comparar dados de uma base no SQL com o extrato bancário enviado pelo usuário, onde poderá ser visto os dados que tem divergência.

## 💻 Tecnologias Utilizadas
- JavaScript
- React
- Material UI
- NodeJs
- PrismaORM
- MySQL

## ⚙️ Como Utilizar
Para rodar a aplicação é necessário ter no computador o NodeJs, o Node Package Manager (NPM)  e o MYSQL instalado, as outras bibliotecas que a aplicação usa serão instaladas através de um comando npm no terminal do Linux.

 1- Abra o terminal, clone o projeto e entre em sua pasta:

 - `git clone git@github.com:Adadezer/PSIData.git` ou  `https://github.com/Adadezer/PSIData.git`
depois
- `cd PSIData`

2- Entre na pasta backend, e instale as dependências:
-  `cd backend`
depois
 - `npm install`
 
3-  Configure a variável de ambiente:
Para fazer a conexão com o banco de dados é necessário criar um arquivo **.env** na raiz da pasta backend, e nesse arquivo vão as informações de usuários e senha do MySQL, segue exemplo do conteúdo do arquivo.
```
MYSQL_HOST=hostMysql
MYSQL_USER=usuarioMysql
MYSQL_PASSWORD=senhaMysql

DATABASE_URL="mysql://nome_do_usuario:senha_do_banco_de_dados@hostmysql:3306/psIdata?schema=public"
```
Na pasta backend tem um arquivo chamado **.env.example** que poderá ser usado como referência.
Esse arquivo é um arquivo oculto, mas se o código for aberto pelo **vscode** será possível vê-lo lá dentro.

4- Após configurar a variável de ambiente, suba o banco de dados, digite no terminal:
 - `npx prisma migrate dev`
 
 Obs: O processo para subir o banco e criar as tabelas é consideravelmente demorado, pois existem tabelas com mais de 3000 registros, minha máquina não é potente mas demorou cerca de 30 min. 
 Agora é hora de tomar aquele cafezinho gostoso! ☕
 
 Obs²: Durante o processo pode aparecer uma mensagem de erro falando do id de uma das tabelas, não tem problema, é uma regra do PrismaORM, mas não interfere na aplicação.

5- Após subir o banco, digite o seguinte comando para rodar o backend:

 - `npm run dev`

Aparecerá na tela do terminal uma mensagem como: `Rodando na porta 3001` isso indica que o backend está em funcionamento.

6- Agora vamos subir o frontend para ver a aplicação rodando, abra outra tela do terminal, (sem fechar a do backend) e entre na pasta do frontend, a partir da pasta raiz do projeto o comando é esse:

 - `cd frontend`
 
 7- Na pasta do frontend instale as dependências e rode a aplicação:
  - `npm install`
 depois
 - `npm start`

O navegador irá abrir uma aba com a aplicação funcinando.

## 📌 Considerações

 - Foi feito um MVP (Mínimo Produto Viável) fazendo a comparação de apenas uma das tabelas, mas o código foi desenvolvido para tornar fácil sua expansão, a implementação de outras tabelas, refatorações e adições de comandos SQL.
 - O extrato .ofx mandado precisou ser tratado manualmente para o usuário poder subi-lo num formato válido, onde o javascript e o mysql possam lê-lo.
 - A conversão do extrato foi de **.ofx** para **.csv** em um site de conversões na internet, depois foi aberto no **planilhas do google** onde foram substituídas pontos e vírgulas, e baixado novamente com essas mudanças. O arquivo válido se encontra na raiz do projeto.