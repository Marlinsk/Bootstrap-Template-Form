function alertMODAL() {

    const element = document.querySelector('#alertModal');
    const alertModal = new bootstrap.Modal(element);
    alertModal.show()

}

function errorMODAL() {

    const element = document.querySelector('#errorModal');
    const errorModal = new bootstrap.Modal(element);
    errorModal.show()

}

function successMODAL() {

    const element = document.querySelector('#successModal');
    const successModal = new bootstrap.Modal(element);
    successModal.show()

}

export { alertMODAL, errorMODAL,successMODAL }