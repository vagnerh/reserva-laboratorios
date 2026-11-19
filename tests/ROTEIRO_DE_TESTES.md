# Roteiro de testes — Sistema de Reserva de Laboratórios

Execute os cenários em um navegador atualizado, com `index.html` aberto.

| ID | Cenário | Passos | Resultado esperado |
|---|---|---|---|
| T01 | Consultar laboratórios (RF01) | Abrir a página. | Exibe Laboratório 01 (30, disponível), Laboratório 02 (40, indisponível) e Laboratório 03 (25, disponível). |
| T02 | Seleção para aula regular | Escolher “Aula regular” na finalidade. | Laboratório 01 fica selecionável; Laboratórios 02 e 03 ficam bloqueados. |
| T03 | Seleção para outra finalidade | Escolher “Pesquisa” ou “Monitoria”. | Laboratórios 01 e 03 ficam selecionáveis; Laboratório 02 continua bloqueado. |
| T04 | Campos obrigatórios (RF03) | Tentar confirmar o formulário vazio. | O navegador impede o envio e indica os campos obrigatórios pendentes. |
| T05 | Reserva válida (RF02/RF04) | Preencher professor, matrícula, finalidade, laboratório, data e horário; confirmar. | Exibe mensagem de sucesso com laboratório, data e horário. |
| T06 | Listagem (RF05) | Concluir uma ou mais reservas. | Cada reserva aparece na lista e os contadores são atualizados. |
| T07 | Bloqueio do indisponível | Escolher qualquer finalidade. | Laboratório 02 não pode ser selecionado. |
| T08 | Nova regra — capacidade | Escolher “Aula regular”. | Laboratório 03 (25 alunos) não pode ser selecionado. |
| T09 | Nova regra — uso permitido | Escolher “Outra atividade” e Laboratório 03. | Laboratório 03 pode ser selecionado e a solicitação pode ser confirmada. |
| T10 | Limpar formulário | Preencher parte dos campos e clicar “Limpar formulário”. | Campos voltam ao estado inicial; nenhuma reserva existente é removida. |
| T11 | Responsividade (RNF02) | Redimensionar para largura aproximada de 390 px. | Cards e formulário ficam em coluna única, sem rolagem horizontal nem conteúdo cortado. |
| T12 | Usabilidade (RNF01) | Percorrer visualmente a tela e usar Tab/Enter. | Laboratórios, formulário e lista são fáceis de localizar; campos possuem rótulos e controles focáveis. |

## Observação sobre o escopo
O enunciado exige que a lista apresente as reservas realizadas durante a execução da página. Portanto, T06 verifica a lista em memória; a persistência após fechar ou atualizar a página não é esperada. A atividade também não especifica bloqueio de reservas duplicadas no mesmo horário, por isso essa regra não foi adicionada ao protótipo.
