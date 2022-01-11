const inputNumero = document.querySelector("#numero");

inputNumero.addEventListener("keypress", function (e) {
    if (!checkCharNumber(e)) {
        e.preventDefault();
    }
});

function checkCharNumber(e) {
    var char = String.fromCharCode(e.keyCode);

    console.log(char);
    var pattern = '[A-Z0-9 ]';
    if (char.match(pattern)) {
        return true;
    }
}