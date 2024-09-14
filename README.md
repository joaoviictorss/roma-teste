# Teste Estagio Front End  Romã

Aplicação de login desenvolvida com React. Uma interface de usuário para login com validação de formulário, exibição/ocultação de senha, e uma simulação de requisição HTTP para o processo de login.

## Funcionalidades

- **Formulário de Login:** Campos para e-mail e senha com validação.
- **Exibição/Ocultação de Senha:** Toggle para mostrar/ocultar a senha.
- **Lembre-me:** Input de opção para lembrar o usuário.
- **Simulação de Requisição:** Simula uma requisição de login com um atraso.
- **Responsividade:** Design responsivo para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React com Vite:** Biblioteca para a construção da interface do usuário.
- **Tailwind CSS:** Framework para estilização.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **RegEx:** Ferramenta que permite encontrar correspondências de strings dentro de outras strings

## Justificativa das escolhas das Tecnologias

- **React:** Decidi utilizar o React porque é a biblioteca com a qual tenho mais experiência em desenvolvimento web,é a que mais tenho experiência, familiaridade e me sinto mais confortável trabalhando.

- **Tailwind CSS:** Escolhi o Tailwind CSS porque facilita muito o desenvolvimento web. Embora o código possa parecer um pouco mais "bagunçado" devido ao uso extensivo de classes, ele economiza bastante tempo. Tambem tenho conhecimento em Sass e Styled Components, porém o Tailwind é o que mais conheço e prefiro usar em meus projetos.

- **TypeScript:** Utilizei o TypeScript devido à sua capacidade de detectar erros de tipo que poderiam ocorrer com JavaScript, que é uma linguagem de tipagem fraca. Hoje em dia, sinto que é estranho não usar TypeScript e acredito que deveria ser utilizado na maioria dos projetos React.

- **RegEx:** Optei por usar expressões regulares para a validação dos inputs neste projeto, normalmente eu gosto usar o Zod com React Hook Form para validação de formulários, neste desafio, por ser algo mais básico, não achei necessário adicionar dependências adicionais.




## Estrutura do Projeto

- `src/`
  - `components/ui` - Componentes reutilizáveis da UI.
  - `assets/` - Recursos como imagens e ícones.
  - `types/` - Tipos TypeScript usados no projeto.
  - `App.tsx` - Componente principal da aplicação.
  - `index.tsx` - Ponto de entrada da aplicação.

## Licença

Este projeto está licenciado sob a [MIT License](https://choosealicense.com/licenses/mit/)

## Contato
Para dúvidas ou sugestões, você pode me encontrar em:

E-mail: joao.viictorss31@gmail.com

GitHub: [joaoviictorss](https://github.com/joaoviictorss)

## Instalação

Para rodar este projeto, siga os passos abaixo:

### 1. Clonar o Repositório

Clone o repositório para o seu ambiente local usando o comando:

```bash
git clone https://github.com/joaoviictorss/roma-teste.git
```

### 2. Navegue para o Diretório do Projeto

```bash
cd roma-teste
```

### 3. Configurar o Ambiente

Certifique-se de ter o Node.js e o npm (ou Yarn) instalados no seu sistema. Você pode verificar isso com os seguintes comandos:

```bash
    node -v
    npm -v
```

Se não estiverem instalados, você pode baixá-los do site oficial do [Node.js](https://nodejs.org/)
 e seguir as instruções para instalação.

### 4. Instalar as Dependências

Instale as dependências do projeto usando npm ou Yarn. Se você estiver usando npm, execute:

```bash
    npm install
```

Ou, se preferir usar o Yarn:

```bash
    npm add
```

### 5. Iniciar o Projeto

Para iniciar a aplicação em modo de desenvolvimento, execute:

```bash
    npm run dev
```

Ou, se preferir usar o Yarn:

```bash
    yarn dev
```

Isso abrirá a aplicação em seu navegador padrão em http://localhost:5173.
Caso queira mudar a porta em que será rodado a aplicação, basta atualizar em o arquivo vite.config.ts seguindo o passos da documentação do [Vite](https://vitejs.dev/config/server-options)
## Demonstração

Você pode visualizar uma demonstração ao vivo do projeto acessando o link abaixo. O projeto está hospedado na Vercel:

[Visualizar Demo](https://roma-teste.vercel.app/)

Sinta-se à vontade para explorar a aplicação e verificar suas funcionalidades.
