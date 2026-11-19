// Dados iniciais fornecidos na atividade
const laboratories = [
  { id: 'lab01', name: 'Laboratório 01', capacity: 30, available: true },
  { id: 'lab02', name: 'Laboratório 02', capacity: 40, available: false },
  { id: 'lab03', name: 'Laboratório 03', capacity: 25, available: true }
];

// Lista mantida em memória durante a sessão atual
const reservations = [];

const labList = document.getElementById('lab-list');
const totalLabs = document.getElementById('total-labs');
const availableLabs = document.getElementById('available-labs');
const totalReservations = document.getElementById('total-reservations');
const reservationCount = document.getElementById('reservation-count');
const reservationList = document.getElementById('reservation-list');

const form = document.getElementById('reservation-form');
const purposeSelect = document.getElementById('finalidade');
const labSelect = document.getElementById('laboratorio');
const feedback = document.getElementById('form-feedback');
const labHint = document.getElementById('lab-hint');

function escapeHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

function formatarData(dataIso) {
  const [ano, mes, dia] = dataIso.split('-');
  return `${dia}/${mes}/${ano}`;
}

function renderizarLaboratorios() {
  labList.innerHTML = laboratories.map((lab) => {
    let classeCard = 'lab-card';
    let classeStatus = 'status-tag disponivel';
    let textoStatus = 'Disponível';
    let classeObs = 'lab-obs';
    let textoObs = 'Liberado para todas as finalidades, incluindo aulas regulares.';

    if (!lab.available) {
      classeCard += ' indisponivel';
      classeStatus = 'status-tag indisponivel';
      textoStatus = 'Indisponível';
      textoObs = 'Sala bloqueada no momento para qualquer reserva.';
    } else if (lab.capacity < 30) {
      classeCard += ' restrito';
      classeObs += ' aviso';
      textoObs = 'Disponível para monitoria, pesquisa e reuniões (restrito para aula regular).';
    }

    return `
      <article class="${classeCard}">
        <div class="lab-card-topo">
          <div>
            <span class="lab-codigo">Sala ${lab.id.replace('lab', '')}</span>
            <h3>${lab.name}</h3>
          </div>
          <span class="${classeStatus}">${textoStatus}</span>
        </div>
        <p class="lab-capacidade"><strong>${lab.capacity}</strong> alunos de capacidade</p>
        <p class="${classeObs}">${textoObs}</p>
      </article>
    `;
  }).join('');

  totalLabs.textContent = laboratories.length;
  availableLabs.textContent = laboratories.filter((lab) => lab.available).length;
}

function atualizarOpcoesLaboratorio() {
  const finalidade = purposeSelect.value;
  const selecionadoAntes = labSelect.value;

  const placeholder = finalidade
    ? 'Selecione um laboratório'
    : 'Selecione primeiro a finalidade';

  let optionsHtml = `<option value="" disabled selected>${placeholder}</option>`;

  for (const lab of laboratories) {
    const permitido = canReserve(lab, finalidade);
    const status = lab.available ? 'Disponível' : 'Indisponível';
    optionsHtml += `<option value="${lab.id}" ${permitido ? '' : 'disabled'}>${lab.name} (${lab.capacity} alunos - ${status})</option>`;
  }

  labSelect.innerHTML = optionsHtml;

  // Mantém a seleção anterior se continuar válida para a nova finalidade
  if (selecionadoAntes) {
    const opt = labSelect.querySelector(`option[value="${selecionadoAntes}"]`);
    if (opt && !opt.disabled) {
      labSelect.value = selecionadoAntes;
    }
  }

  if (!finalidade) {
    labHint.textContent = 'Selecione a finalidade para liberar os laboratórios compatíveis.';
  } else if (finalidade === 'Aula regular') {
    labHint.textContent = 'Aula regular exige no mínimo 30 alunos. O Laboratório 03 fica bloqueado.';
  } else {
    labHint.textContent = 'Laboratórios indisponíveis continuam bloqueados.';
  }
}

function mostrarMensagem(texto, erro = false) {
  feedback.textContent = texto;
  feedback.hidden = false;
  feedback.classList.toggle('erro', erro);
}

function renderizarReservas() {
  totalReservations.textContent = reservations.length;
  reservationCount.textContent = reservations.length;

  if (reservations.length === 0) {
    reservationList.innerHTML = `
      <div class="estado-vazio" id="empty-state">
        <strong>Nenhuma reserva registrada</strong>
        <span>As reservas confirmadas aparecerão nesta lista.</span>
      </div>
    `;
    return;
  }

  reservationList.innerHTML = reservations.map((item) => `
    <article class="item-reserva">
      <div class="item-reserva-topo">
        <strong>${item.laboratoryName}</strong>
        <span class="tag-confirmada">Confirmada</span>
      </div>
      <div class="item-reserva-dados">
        <span><strong>Professor:</strong> ${escapeHtml(item.professorName)}</span>
        <span><strong>Matrícula:</strong> ${escapeHtml(item.professorRegistration)}</span>
        <span><strong>Data:</strong> ${formatarData(item.date)}</span>
        <span><strong>Horário:</strong> ${item.time}</span>
        <span><strong>Finalidade:</strong> ${item.purpose}</span>
      </div>
    </article>
  `).join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.hidden = true;

  if (!form.reportValidity()) {
    return;
  }

  const dados = new FormData(form);
  const lab = laboratories.find((item) => item.id === dados.get('laboratorio'));
  const finalidade = dados.get('finalidade');

  if (!canReserve(lab, finalidade)) {
    mostrarMensagem('Não foi possível reservar: selecione um laboratório disponível e compatível com a finalidade.', true);
    atualizarOpcoesLaboratorio();
    return;
  }

  const novaReserva = {
    professorName: dados.get('professorNome').trim(),
    professorRegistration: dados.get('professorMatricula').trim(),
    laboratoryName: lab.name,
    date: dados.get('data'),
    time: dados.get('horario'),
    purpose: finalidade
  };

  reservations.unshift(novaReserva);
  renderizarReservas();

  form.reset();
  atualizarOpcoesLaboratorio();
  mostrarMensagem(`Reserva confirmada para ${lab.name} no dia ${formatarData(novaReserva.date)} às ${novaReserva.time}.`);
});

form.addEventListener('reset', () => {
  feedback.hidden = true;
  setTimeout(atualizarOpcoesLaboratorio, 0);
});

purposeSelect.addEventListener('change', atualizarOpcoesLaboratorio);

// Inicialização da tela
renderizarLaboratorios();
atualizarOpcoesLaboratorio();
renderizarReservas();