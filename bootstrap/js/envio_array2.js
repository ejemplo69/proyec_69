var arreglo = [];
var persona;

function agregarElemento(){
    // llamamos los input 
    var nombre = document.getElementById('nombre').value;
    //var nombre2 =document.getElementById('nombre');
    var todos = document.getElementsByClassName('text');
    var documento= document.getElementById('documento').value;
    var telefono = document.getElementById('tel').value;
    var direccion = document.getElementById('direccion').value;
    
    // crear objeto
    persona = {
        "nombre": nombre,
        "documento": documento,
        "tel": telefono,
        "dereccion": direccion
    }

    // arreglo[{'jose',636,5454,6373},{'hdhf',6464,6464,646},{'uyeue',6363,634674,636}]
    arreglo.push(persona);

    document.getElementById('nombre').value="";
    document.getElementById('documento').value="";
    document.getElementById('tel').value="";
    document.getElementById('direccion').value="";

    if(arreglo.length >= 3){
        arreglo.splice(arreglo.length-1,1);

        alert('ingreso mas de 2 registros')
    }

    document.getElementById('myform').reset();
    
}

function mostrarElemento(){
    console.log(arreglo);

    alert(arreglo[1]['nombre']);
}