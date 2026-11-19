// Valida se um laboratório pode ser reservado para determinada finalidade
function canReserve(lab, purpose) {
  if (!lab || !lab.available) {
    return false;
  }

  if (purpose === 'Aula regular' && lab.capacity < 30) {
    return false;
  }

  return true;
}

if (typeof module !== 'undefined') {
  module.exports = { canReserve };
}