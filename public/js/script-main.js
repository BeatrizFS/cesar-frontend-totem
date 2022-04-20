function totem(event) {
    var tecla = event.key;

    if (tecla == "i" || tecla == "I") {
        document.location.href = 'checkin.html';
    } else if (tecla == "o" || tecla == "O") {
        document.location.href = 'checkout.html';
    }
    else {
        document.location.href = 'reserva-rapida.html'
    }
}
