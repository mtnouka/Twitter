# copyTwitter
Aplicação cópia do Twitter desenvolvida durante a GoWeek da Rocketseat.

## Para rodar este exemplo você precisa ter instalado:
- node
- npm
- yarn(opcional, caso não baixe o yarn utilize npm nos comando abaixo)
- nodemon(opcional)
- expo

## Backend
- Para rodar o Backend será necessário alterar a string de conexão da base de dados:
  backend/src/index.js : Linha 11
- Rode um npm i para instalar todas as dependências do projeto
- yarn dev

## Frontend
- Basta rodar um npm i para instalar todas as dependências do projeto
- yarn start
- Se seu backend estiver rodando o script perguntará se você deseja rodar seu front em um porta alternativa (os dois estão setados para a porta 3000)

## Mobile
- Para começarmos, precisamos instalar o expo: npm install -g expo-cli
- Rodamos npm i para instalar as dependências do projeto
- yarn start
- O expo abrirá uma interface no seu navegador, quando isso acontecer repare no endereço acima do QRCode, guarde ele
- Para funcionar perfeitamente precisamos realizar alguns ajustes de acordo com a sua máquina, para isso abra o seguinte caminho:
  mobile/src/services/api.js: linha 4. Aqui alteramos a baseURL, para o endereço que guardamos no passo anterior
  
##### Para rodar a versão mobile você por emular pelo PC tranquilamente clicando em alguma das opções na lateral esquerda da interface do Expo, ou você pode optar por baixar o Expo no seu smartphone e ler o QRCode.
