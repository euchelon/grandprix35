iniciarTerminal("salirBtn");

function salir() {

    sonar();

    setTimeout(() => {

        window.close();

        document.body.innerHTML = `
            <h2>&gt; Sesión finalizada.</h2>
            <p>&gt; Puede cerrar esta pestaña.</p>
        `;

    }, 200);

}