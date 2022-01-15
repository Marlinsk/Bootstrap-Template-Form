const inputNomeCompleto = document.querySelector("#nome-completo");
const inputEstado = document.querySelector("#estado");
const inputCidade = document.querySelector("#cidade");
const inputBairro = document.querySelector("#bairro");
const inputRua = document.querySelector("#rua");
const inputNomeBanco = document.querySelector("#nome-do-banco");

inputNomeCompleto.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

inputEstado.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

inputNomeBanco.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

function checkChar(e) {
  var char = String.fromCharCode(e.keyCode);

  console.log(char);
  var pattern = '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]';
  if (char.match(pattern)) {
    return true;
  }
}

inputCidade.addEventListener("keypress", function (e) {
  if (!checkCharNumber(e)) {
    e.preventDefault();
  }
});

inputBairro.addEventListener("keypress", function (e) {
  if (!checkCharNumber(e)) {
    e.preventDefault();
  }
});

inputRua.addEventListener("keypress", function (e) {
  if (!checkCharNumber(e)) {
    e.preventDefault();
  }
});

function checkCharNumber(e) {
  var char = String.fromCharCode(e.keyCode);

  console.log(char);
  var pattern = '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]';
  if (char.match(pattern)) {
    return true;
  }
}