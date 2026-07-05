const beep = new Audio("audio/beep.mp3");
beep.volume = 0.4;

function sonar() {

    beep.currentTime = 0;
    beep.play();

}

function ir(destino) {

    sonar();

    setTimeout(() => {

        location.href = destino;

    }, 200);

}