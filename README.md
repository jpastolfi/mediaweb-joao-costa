# Mediaweb Front End Challenge

Código para o desafio de front end solicitado pela Mediaweb. As telas requisitadas e regras para o desafio podem ser encontradas no diretório `challenge`. Na pasta `project-joao-costa` estão os arquivos da solução proposta, mais especificamente na pasta `project-joao-costa/dist`, tendo em vista que o acesso à solução só deve ser feito através do arquivo `index.html`.

## Estratégia usada
Ao receber o desafio fiquei em dúvida se deveria tentar resolver o desafio usando apenas um arquivo CSS e outro HTML ou se deveria procurar uma solução para que eu pudesse usar as ferramentas do dia-a-dia (e.g. React, Shadcn, Tailwind, etc). Preferi a segunda opção por representar um desafio maior, por ser um modo para demonstrar habilidades com as ferramentas usadas pela empresa e por demonstrar proatividade para pesquisar soluções diferentes.

Após muita pesquisa, testar diversos frameworks (Next, Astro, Alpine, etc) e não conseguir solucionar a questão do acesso à aplicação através do arquivo `index.html`, encontrei um plugin para Vite chamado [vite-plugin-singlefile](https://www.npmjs.com/package/vite-plugin-singlefile) que permite o inline de todo o código JS e CSS dentro de um único arquivo HTML, permitindo que a aplicação inteira possa ser acessada através do `index.html`.

Para facilitar a leitura e a manutenção do código, criei utility classes de CSS para criar classes reutilizáveis e não ter que repetir muito código de estilização.


## Frameworks e bibloitecas utilizados
- Vite
- React
- Tailwind
- Shadcn

