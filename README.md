# Sistema de Reserva de Laboratórios — Protótipo

Protótipo front-end desenvolvido a partir da atividade **“Do UML ao Software”**. A aplicação permite consultar os três laboratórios de exemplo, preencher uma solicitação e visualizar as reservas registradas durante a sessão atual.

## Como executar

1. Extraia o arquivo ZIP para uma pasta.
2. Abra `index.html` em um navegador atualizado (Chrome, Edge, Firefox ou Safari).
3. Escolha a finalidade, selecione um laboratório permitido e preencha todos os campos obrigatórios.
4. Clique em **Confirmar reserva**. A confirmação e o item da reserva aparecerão na página.

Não há instalação de dependências, servidor, banco de dados ou backend.


## Arquivos

- `index.html` — estrutura e campos da interface.
- `styles.css` — identidade visual, componentes e regras responsivas.
- `app.js` — dados de exemplo, validação do formulário e renderização das reservas.
- `rules.js` — regra de elegibilidade dos laboratórios, compartilhada com os testes.
- `docs/` — relatório e roteiro de prototipação no Figma.
- `tests/` — roteiro de testes funcionais e de responsividade.

## Regras implementadas

- Laboratório 01: 30 alunos, disponível.
- Laboratório 02: 40 alunos, indisponível para qualquer finalidade.
- Laboratório 03: 25 alunos, disponível para finalidades diferentes de aula regular.
- Para **Aula regular**, somente laboratórios disponíveis com capacidade igual ou superior a 30 alunos podem ser selecionados.
- Nome, matrícula, finalidade, laboratório, data e horário são obrigatórios.
- Cada confirmação é incluída na lista da página e atualiza os indicadores.
- As reservas são mantidas apenas em memória; atualizar ou fechar a página limpa a lista.


## Links
- https://vagnerh.github.io/reserva-laboratorios/  (github pages)
- https://www.figma.com/design/rP0gEdPSOE6KTdo07CEZ0l/Res_Lab?node-id=0-1&t=oFZGHgtJTZL2mAN1-1 (figma)