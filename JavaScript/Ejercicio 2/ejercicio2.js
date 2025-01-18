let numeros = [];
let biggerNumber = 0;
for(let i = 0; i < 10; i++){
    console.log("Ingrese un numero:");
    numeros.push(prompt());
}
for(let i = 0; i < 10; i++){
    if(numeros[i] > biggerNumber){
        biggerNumber = numeros[i];
    }
}
console.log("El numero mas grande es: "+biggerNumber);
