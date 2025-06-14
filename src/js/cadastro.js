'use strict'; // Modo restrito

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length === 8 && eNumero(cep);

// Busca o CEP
const buscaCep = async (cep) => {
    
}