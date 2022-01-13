// validateCompleteNameInput()
function validateCompleteNameInput() {

    const valueInput = document.getElementById("nome-completo").value;
    const input = document.querySelector("#nome-completo");

    if (valueInput == false || valueInput.length <= 7) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }
            
            input.classList.add('is-valid');
        }
    }
}

// validateCPFInput()
function validateCPFInput() {

    const valueInput = document.getElementById("CPF").value;
    const input = document.querySelector("#CPF");

    if (valueInput == false || valueInput.length <= 13) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateEmailInput()
function validateEmailInput() {

    const valueInput = document.getElementById("email").value;
    const input = document.querySelector("#email");

    if (valueInput == false) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateSmartphoneNumberContactInput()
function validateSmartphoneNumberContactInput() {

    const valueInput = document.getElementById("telefone-celular").value;
    const input = document.querySelector("#telefone-celular");

    if (valueInput == false || valueInput.length <= 19) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateTelephoneNumberContactInput()
function validateTelephoneNumberContactInput() {

    const valueInput = document.getElementById("telefone-fixo").value;
    const input = document.querySelector("#telefone-fixo");

    if (valueInput == false || valueInput.length <= 17) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateCEPInput()
function validateCEPInput() {

    const valueInput = document.getElementById("CEP").value;
    const input = document.querySelector("#CEP");

    if (valueInput == false || valueInput.length <= 8) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateStateNameInput()
function validateStateNameInput() {

    const valueInput = document.getElementById("estado").value;
    const input = document.querySelector("#estado");

    if (valueInput == false) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateCityNameInput()
function validateCityNameInput() {

    const valueInput = document.getElementById("cidade").value;
    const input = document.querySelector("#cidade");

    if (valueInput == false) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateDistrictNameInput()
function validateDistrictNameInput() {

    const valueInput = document.getElementById("bairro").value;
    const input = document.querySelector("#bairro");

    if (valueInput == false) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateStreetName()
function validateStreetName() {

    const valueInput = document.getElementById("rua").value;
    const input = document.querySelector("#rua");

    if (valueInput == false) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateResidenceNumberInput()
function validateResidenceNumberInput() {

    const valueInput = document.getElementById("numero").value;
    const input = document.querySelector("#numero");

    if (valueInput == false || valueInput.length <= 0) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateBankName()
function validateBankName() {

    const valueInput = document.getElementById("nome-do-banco").value;
    const input = document.querySelector("#nome-do-banco");

    if (valueInput == false || valueInput.length <= 0) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateBankCode()
function validateBankCode() {

    const valueInput = document.getElementById("numero-do-banco").value;
    const input = document.querySelector("#numero-do-banco");

    if (valueInput == false || valueInput.length <= 2) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateAgencyCode()
function validateAgencyCode() {

    const valueInput = document.getElementById("agencia").value;
    const input = document.querySelector("#agencia");

    if (valueInput == false || valueInput.length <= 3) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}

// validateCheckingAccountInput()
function validateCheckingAccountInput() {

    const valueInput = document.getElementById("conta-corrente").value;
    const input = document.querySelector("#conta-corrente");

    if (valueInput == false || valueInput.length <= 8) {

        if (input.classList.contains('is-invalid') == false) {

            if (input.classList.contains('is-valid') == true) {
                input.classList.remove('is-valid');
            }

            input.classList.add('is-invalid');
        }

    } else {

        if (input.classList.contains('is-valid') == false) {

            if (input.classList.contains('is-invalid') == true) {
                input.classList.remove('is-invalid');
            }

            input.classList.add('is-valid');
        }
    }
}