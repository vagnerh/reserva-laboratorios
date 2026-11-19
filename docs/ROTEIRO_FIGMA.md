# Roteiro para construir o protótipo no Figma

## Objetivo
Reproduzir no Figma a interface do protótipo web de Reserva de Laboratórios, mantendo os mesmos nomes de campos, estados e regras de negócio. O Figma será a representação navegável da interface; não substitui a implementação funcional em HTML, CSS e JavaScript.

## 1. Criar os frames

Crie dois frames principais:

- **Desktop:** 1440 × 1000 px (ou altura automática), para demonstrar a visão completa.
- **Mobile:** 390 × 844 px, para demonstrar o comportamento responsivo.

Use Auto Layout nos blocos, cards, campos e botões. Mantenha margens laterais aproximadas de 28 px no desktop e 16 px no mobile.

## 2. Organizar as seções

Na ordem vertical, desenhe:

1. **Barra superior:** marca “Reserva de Laboratórios” e selo “Protótipo acadêmico”.
2. **Banner de apresentação:** título “Encontre o espaço ideal para sua aula.” e texto de apoio.
3. **Indicadores:** laboratórios cadastrados (3), disponíveis (2) e reservas nesta sessão (inicialmente 0).
4. **Consulta de laboratórios:** três cards, com nome, capacidade, status e observação.
5. **Aviso da regra:** laboratórios com capacidade inferior a 30 não podem ser reservados para aula regular.
6. **Formulário:** identificação do professor, finalidade, laboratório, data, horário e botões.
7. **Lista de reservas:** estado vazio inicial e estado preenchido após uma confirmação.
8. **Rodapé:** identificação de protótipo e ausência de backend/banco de dados.

## 3. Componentes e estilos sugeridos

Crie componentes reutilizáveis para:

- `LabCard / Disponível`
- `LabCard / Indisponível`
- `LabCard / Restrito para aula regular`
- `Input / Default / Focus / Error`
- `Select / Default / Disabled`
- `Button / Primary` e `Button / Secondary`
- `ReservationItem`
- `Feedback / Success` e `Feedback / Error`
- `EmptyState`

Paleta aproximada do protótipo: azul-marinho `#14213D`, azul `#315B9A`, verde-azulado `#28A69A`, fundo `#F5F7FB`, branco `#FFFFFF`, texto `#1D2939`, texto secundário `#687588`, verde de status `#18845B` e vermelho de status `#B54742`.

Tipografia sugerida: Inter (ou fonte sem serifa equivalente). Use títulos fortes, textos de apoio menores e contraste suficiente entre texto e fundo.

## 4. Estados que precisam aparecer no protótipo

Crie telas ou variantes para estes estados:

- **Inicial:** nenhum formulário preenchido e lista de reservas vazia.
- **Finalidade “Aula regular”:** Laboratório 02 desabilitado por indisponibilidade e Laboratório 03 desabilitado por capacidade inferior a 30; Laboratório 01 selecionável.
- **Outra finalidade:** Laboratório 03 pode ser selecionado; Laboratório 02 continua desabilitado.
- **Validação:** tentativa de confirmar sem preencher campos obrigatórios, mostrando indicação de campos pendentes.
- **Sucesso:** aviso de confirmação e um item novo na lista de reservas.

## 5. Conexões do protótipo

No modo Prototype do Figma:

- Conecte o botão de confirmação a uma tela/variante de sucesso.
- Faça a variante de finalidade “Aula regular” mostrar o seletor com Laboratório 03 bloqueado.
- Faça a variante de “Pesquisa” ou “Monitoria” permitir a seleção do Laboratório 03.
- Conecte o botão “Limpar formulário” à tela inicial.
- Demonstre o estado vazio e o estado preenchido da lista.

O Figma não executará a regra de negócio real como o JavaScript. As variantes servem para simular visualmente os estados.

## 6. Checklist antes de apresentar

- [ ] Todos os textos e campos correspondem à implementação.
- [ ] O Laboratório 02 aparece como indisponível.
- [ ] O Laboratório 03 aparece com capacidade de 25 alunos.
- [ ] A restrição de aula regular está visível e demonstrada.
- [ ] A tela mobile empilha os cards e o formulário sem cortes.
- [ ] O fluxo mostra estado inicial, validação e confirmação.
