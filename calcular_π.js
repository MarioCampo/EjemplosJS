let suma = 0;
const limite = 10000000;

for (let i = 1; i < limite; i++) {
	suma = suma + (1/Math.pow(i,2));
}

let pi = Math.sqrt(suma*6);

console.log(pi);