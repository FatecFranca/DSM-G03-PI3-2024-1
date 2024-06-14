# DSM-G03-PI3-2024-1
Repositório do GRUPO 03 do Projeto Interdisciplinar do 3º semestre DSM 2024/1. Alunos: Cláudio Matos,  João Pedro Andrade Cintra, Pedro Gonçalves Moreira, Vinícius Baldochi Cardoso

# SalonConnect

## Descrição

SalonConnect é uma aplicação web desenvolvida com React e Tailwind CSS. O objetivo do projeto é conectar salões de beleza com clientes de maneira eficiente e intuitiva.

## Documentação

Repositório do projeto GitHub = `https://github.com/FatecFranca/DSM-G03-PI3-2024-1`

PORTFOLIO PI - SalonConnet = `https://drive.google.com/file/d/1Pz7i_gUqanJe-r96wF3vYINoC-4w9As1/view?usp=sharing`

Documenter Postman = `https://documenter.getpostman.com/view/34635750/2sA3XPEPNp`

Overleaf = `https://www.overleaf.com/project/6615c49e3cd4d7f34ec366a5`

Figma = `https://www.figma.com/design/b3zXJnRsjc5FTOvlEJI7mf/PI-SalonConnect?node-id=22-4&t=RSPaIkYSl3Az5cTI-1`

Behance = `https://www.behance.net/gallery/200901083/Projeto-PI-SalonConnect-3Semestre-DSM-Fatec-Franca`

Notion = `https://www.notion.so/PI-Salon-Connect-Equipe-CerTeam-d9bcddb1ae794335be962018273f792c`

Jira = `https://projeto-fatec.atlassian.net/browse/PI-4?atlOrigin=eyJpIjoiMmRmZGI3ZjRkNzFkNDVjMDkyM2M3MjNiMWJkNGQyZjAiLCJwIjoiaiJ9`

Deploy back-end (vide meio de acesso tokenizado abaixo) = `https://dsm-g03-pi3-2024-1-n0e0.onrender.com/cliente`

## FRONT-END

### Tecnologias

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Tailwind CSS**: Um framework CSS de baixo nível que permite aos desenvolvedores criar designs personalizados.

### Instalação

1. Clone o repositório:
   ```
   git clone `https://github.com/seuusuario/SalonConnect.git`
   ```
2. Instale as dependências:
   ```
   cd frontend
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

## BACK-END
Backend = feito e construido com as tecnologias e funcionalidades de Node.js autenticação via JWT token e Mongoose.

### Requisitos / Tecnologias
Node.js e Npm instalados na máquina.

### Iniciando Back-end

No bash navegue até a pasta backend execute
```
cd backend
```
### Configure o . env
```
DATABASE_URL=
JWT_SECRET= 
```
### Rode o Back-end
```
npm run dev
```
### Teste back-end 

Após iniciar o servidor de desenvolvimento, é possível (get) acessar a aplicação em `http://localhost:3000/cliente`.

#### Teste back-end via postman

Fazer o post no endereço: `https://dsm-g03-pi3-2024-1-n0e0.onrender.com/cliente/login` com o seguinte json:
```
{
"loginUsu": "TesteFinal",
"senhaUsu": "TesteFinal"
}
```
Depois pode-se fazer o GET, POST, put, delete no endereço: `https://dsm-g03-pi3-2024-1-n0e0.onrender.com/cliente`
Post e put devendo consulgtar a documentação em `https://documenter.getpostman.com/view/34635750/2sA3XPEPNp`  

## Contribuição

Contribuições são sempre bem-vindas. Por favor, veja o arquivo `CONTRIBUTING.md` para mais detalhes.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE.md` para mais detalhes.
