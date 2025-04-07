let nome = "Rodrigo"
// alert ( nome );
console.log(nome);

const x = 10;
const array = ["a", "b", "c"]
const objeto = { name: "Rodrigo", age:26} //JSON

console.log(x);
console.log(typeof x);
console.log("----------------")
console.log(array);
console.log(typeof array);
console.log("----------------")
console.log(objeto);
console.log(typeof objeto);
console.log(objeto.name);
console.log(array[2]);

let opcao = true; // Boolean
// Condicional
if (2 > 1){
    console.log(" 2 É maior que 1")
} else {
    console.log("2 Não é maior que 1")
}
// Estrutura de Repetição 
const arr = ["amora", "banana", "caju", "damasco", "Manga", "Abacaxi"];
for (let i = 0; i < arr.length; i++){
    console.log('O valor da repetição é '+ arr[i]);
    // Template literal, é o uso da Crase `
    // console.log(`O valor da repetição é ${arr[i]}`);
}

// Função
function soma(){
    console.log(22+11);
}
soma()

function calcula(a,b){
    console.log(a*b);
}
calcula(12,12);