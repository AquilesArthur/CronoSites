# Crono Sites - Digital Craft

Este é o repositório do site oficial da Crono, construído com React, Tailwind CSS e Framer Motion para experiências interativas 3D.

## Tecnologias Utilizadas
- **React 19**
- **Vite** (Build e dev server)
- **Tailwind CSS v4**
- **Framer Motion** & **GSAP** (Animações e interações)
- **Lucide React** (Ícones)

## Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes comandos:

### `npm install`
Instala todas as dependências do projeto listadas no `package.json`.

### `npm run dev`
Roda o servidor de desenvolvimento local.
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
A página será recarregada automaticamente caso você faça edições (HMR ativado).

### `npm run build`
Compila a aplicação para produção na pasta `docs/`.
Ele agrupa corretamente o React em modo de produção e otimiza a build para a melhor performance. 
A pasta de saída padrão está configurada para `docs/` no `vite.config.ts` para facilitar a publicação no **GitHub Pages**.

### `npm run deploy`
Uma vez buildado (`npm run build`), você pode rodar esse script para publicar via módulo `gh-pages`. (Assegure-se de que os metadados do git estejam configurados ou suba os arquivos da pasta `docs` manualmente para o branch principal e ative o GitHub Pages pela pasta docs).

## Estrutura do Projeto
- `/src/components/` - Componentes React da UI (Hero, Portfolio, Benefícios, etc)
- `/src/pages/` - Páginas (Home, Termos, Privacidade)
- `/src/index.css` - Estilos base e utilitários globais
- `/vite.config.ts` - Configurações de compilação do Vite

## Deploy no GitHub Pages
1. No arquivo `vite.config.ts`, a base URL está definida como `./` e a pasta de saída (outDir) como `docs`.
2. Para publicar, rode `npm run build`.
3. Faça o commit e o push da pasta `docs` para o seu repositório no GitHub.
4. Vá em **Settings > Pages** no seu repositório do GitHub.
5. Em **Source**, selecione a branch `main` e a pasta `/docs`, depois clique em Save.
