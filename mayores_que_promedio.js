
num = prompt("Ingresar cuantos numeros quiere leer:  ");
let nums = new Array(num);
var sum=0;
var a;
for (let i = 0 ; i < num; i++){
    nums[i] = prompt("Ingresar el numero  :  ");
sum = sum + Number(nums[i]);
}
console.log("la suma total es", sum);
prom=sum/num;
console.log("el promedio es", prom);

cont=0;
i=0;
for (let j = 0 ; j < num; j++){
if (prom<nums[i])
cont=cont+1;
i++;
}

console.log("Existen", cont, "datos mayores al promedio");

