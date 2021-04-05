function reception() {
    window.location="reception.html";
}
function reservation() {
    window.location="reservation.html";
}
function missionary() {
    window.location="missionaries.html";
}
function reservationValidation() {
    var isValid = true;

    if(isValid) {
        window.location="reservationConfirmation.html";
    }
    return false;
}
function missionaryFormValidation() {
    var missionaryValid = true;

    if(missionaryValid) {
        window.location="missionaryConformation.html";
    }
    return false;
}
function receptionFormValidation() {
    var receptionValid = true;

    if(receptionValid) {
        window.location="receptionConfirmation.html";
    }
    return false;
}
function validation() {
    var contactValid = true;

    if(contactValid) {
        window.location="contactConformation.html"
    }
    return false;
}