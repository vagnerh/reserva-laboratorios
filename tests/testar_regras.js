'use strict';

const assert = require('node:assert/strict');
const { canReserve } = require('../rules.js');

const lab01 = { id: 'lab01', name: 'Laboratório 01', capacity: 30, available: true };
const lab02 = { id: 'lab02', name: 'Laboratório 02', capacity: 40, available: false };
const lab03 = { id: 'lab03', name: 'Laboratório 03', capacity: 25, available: true };

assert.equal(canReserve(lab01, 'Aula regular'), true, '30 alunos atende ao mínimo para aula regular');
assert.equal(canReserve(lab02, 'Pesquisa'), false, 'laboratório indisponível não pode ser reservado');
assert.equal(canReserve(lab03, 'Aula regular'), false, '25 alunos não atende ao mínimo para aula regular');
assert.equal(canReserve(lab03, 'Pesquisa'), true, 'laboratório 03 pode receber outra finalidade');
assert.equal(canReserve(null, 'Pesquisa'), false, 'laboratório inexistente não pode ser reservado');

console.log('5 testes de regra de negócio passaram.');
