let nombres = [];
for (let i = 0; i < 8; i++){
    console.log("Ingrese un nombre");
    nombres.push(prompt());   
}
console.log("Los nombres son:");
nombres.forEach(nombre => {
    console.log(nombre);
});