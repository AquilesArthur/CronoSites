# CronoSites

Para publicar este projeto via branch `main`:

O projeto está configurado para exportar a versão de produção para a pasta `/docs`. 
Dessa forma, você pode manter tudo na mesma branch (main) sem precisar rodar comandos extras no seu computador.

1. Faça suas alterações.
2. Certifique-se de não alterar o arquivo `vite.config.ts`, pois ele está configurado para exportar o build para a pasta `/docs`.
3. Você mesmo precisa enviar o build pronto. Então toda vez que for atualizar o site, certifique-se de salvar os arquivos novos que aparecerão na pasta `/docs`.
4. No GitHub, vá em **Settings > Pages**.
5. Em **Source**, escolha "Deploy from a branch".
6. No seletor de Branch, deixe em **`main`**, e na pastinha ao lado mude de `/(root)` para 👉 **`/docs`**.
7. Clique em Save.
