var contadorD = 0;
var contadorA = 0;
var avion;
var destino;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    
    avion = ev.target.id;
}

function drop(ev) {
    ev.preventDefault();
    destino = ev.target.id;

    if (avion=="despegar" && destino =="despegados"){
        contadorD++;
        document.getElementById("contadorD").innerHTML = contadorD;
    }
    if (avion=="despegar" && destino == "basurita"){
        if (contadorD > 0) {
            contadorD--;
            document.getElementById("contadorD").innerHTML = contadorD; 
        }
    }

    if (avion=="aterrizar" && destino =="aterrizados"){
        contadorA++;
        document.getElementById("contadorA").innerHTML = contadorA;
    }
    if (avion=="aterrizar" && destino == "basurita"){
        if (contadorA > 0) {
            contadorA--;
            document.getElementById("contadorA").innerHTML = contadorA; 
        }
    }
}