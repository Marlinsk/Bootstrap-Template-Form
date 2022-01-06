const inputNomeCompleto = document.querySelector("#nome-completo");
const inputCPF = document.querySelector("#CPF");
const inputPais = document.querySelector("#pais");
const inputEstado = document.querySelector("#estado");
const inputCidade = document.querySelector("#cidade");
const inputBairro = document.querySelector("#bairro");

inputNomeCompleto.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

inputCPF.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

inputPais.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

inputEstado.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

inputCidade.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

inputBairro.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]';
    if (char.match(pattern)) {
      return true;
  }
}

const inputNumero = document.querySelector("#numero");

inputNumero.addEventListener("keypress", function(e) {
    if(!checkCharNumber(e)) {
      e.preventDefault();
  }
});

function checkCharNumber(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[A-Z0-9]';
    if (char.match(pattern)) {
      return true;
  }
}