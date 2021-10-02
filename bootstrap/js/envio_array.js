window.onload = function(){
    datos =[];
}

function agregar(){
    var elemen = document.getElementById('texto').value;

    datos.push(elemen);

    document.getElementById('texto').value ="";
}

function mostrar(){
    let resultado= document.getElementById('resultado');

    for(const i of datos){
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = i;

        resultado.appendChild(datoParrafo);
    }
}

