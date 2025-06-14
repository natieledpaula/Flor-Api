'use strict'; // Modo restrito

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length === 8 && eNumero(cep);

// Busca o CEP
const buscaCep = async () => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)) {
        const dados = await fetch(url);
        const address = await dados.json();

        // hasOWnProperty rertorna um valor booleano indicado se o objetivo possui a propriedade especifica no parenteses
        if(address.hasOwnProperty('erro')) {
            alert("CEP não encontrado!");
        } else {
            preencherFormulario(address);
        }
    } else {
        alert("CEP incorreto, tente novamente!");
    }
}

// Preencher formulario