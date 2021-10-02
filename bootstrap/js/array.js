let arreglo=[];

arreglo[0]=12;
arreglo[1]=11;
arreglo[2]=16;
arreglo[3]="hola";

for(var i in arreglo){
console.log("arreglo original: "+arreglo[i]);
}

console.log('/////////////////////////////////////////////////');
//update de arreglo
//arreglo[1]="mundo";

//agrega un elemento en la uktima posicion push()
//arreglo.push(30);

//eliminar el primer elemento del array shift()
//arreglo.shift();

//elimina el ultimo elemento del array pop()
//arreglo.pop();

//agrega elementos en la primera posicion unshift()
//arreglo.unshift('marcos',90);

//borrar una posicion especifica splice()
//arreglo.splice(1,3);

// agrega elementos segun la posicion 
// arreglo.splice(4,3,'h','o','l');

// for(i=0; i < arreglo.length; i++){
//     console.log('arreglo editado: '+ arreglo[i]);
// }

//lista todos los elementos del array en una cadena de texto
//console.log("peopiedad join(): " +arreglo.join());
