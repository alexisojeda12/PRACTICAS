
x = prompt("De que dimension es x?:  ");
y = prompt("De que dimension es y?:  ");
let numsx = new Array(x);
let numsy = new Array(y);
for (let i = 0 ; i < x; i++){
    numsx[i] = prompt("Ingresar el numero de x :  ");
}
for (let j = 0 ; j < y; j++){
    numsy[j] = prompt("Ingresar el numero de y  :  ");
}
i=0
j=0
pi=0
for (let k = 0 ; k < y; k++){
   op=Number(numsx[i]) * Number(numsy[j])
pi=pi+op;
    i++
    j++
}
console.log("el producto interno es", pi);

if (pi==0){
console.log("x and y son ortogonales");
}
else
{console.log("x and y no son ortogonales");

}
