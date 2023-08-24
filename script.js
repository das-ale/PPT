let jugadaOrdenador;

function eleccionPc() {
    let decision = Math.floor(Math.random()*3);
    if (decision === 0) {
        jugadaOrdenador = "piedra";
    }
    else if (decision === 1) {
        jugadaOrdenador = "papel";
    }
    else {
        jugadaOrdenador = "tijeras"
    }
}

function piedra () {
    if (jugadaOrdenador==="piedra") {
        alert(` Tu jugada ha sido Piedra, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que hay empate`);
    }
    else if (jugadaOrdenador==="papel") {
        alert(` Tu jugada ha sido Piedra, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que gana el ordenador`);
    }
    else if (jugadaOrdenador==="tijeras") {
        alert(` Tu jugada ha sido Piedra, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que has ganado`);
    }
}

function papel () {
    if (jugadaOrdenador==="piedra") {
        alert(` Tu jugada ha sido Papel, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que has ganado`);
    }
    else if (jugadaOrdenador==="papel") {
        alert(` Tu jugada ha sido Papel, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que hay empate`);
    }
    else if (jugadaOrdenador==="tijeras") {
        alert(` Tu jugada ha sido Papel, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que has perdido`);
    }
}

function tijeras () {
    if (jugadaOrdenador==="piedra") {
        alert(` Tu jugada ha sido Tijeras, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que ha ganado el ordenador`);
    }
    else if (jugadaOrdenador==="papel") {
        alert(` Tu jugada ha sido Tijeras, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que has ganado`);
    }
    else if (jugadaOrdenador==="tijeras") {
        alert(` Tu jugada ha sido Tijeras, 
                la del ordenador ha sido ${jugadaOrdenador}, 
                por lo que hay empate`);
    }
}

eleccionPc();
// console.log(jugadaOrdenador);

let jugadaPersona = prompt("Introduce tu jugada: ", "Introduce tu jugada");
console.log(jugadaPersona);

let jugadaPersonaMinusculas = jugadaPersona.toLowerCase();
console.log(jugadaPersonaMinusculas);

switch (jugadaPersonaMinusculas) {
    case "piedra":
        piedra();
        break;
    case "papel":
        papel();
        break;
    case "tijeras":
        tijeras();
        break;
    default:
        alert("Introduce 'piedra', 'papel' o 'tijeras'.")
        break; 
}
