x = prompt("De que dimension es ?:  ");
y=x;
pot=y*x;

let completo = new Array(y);

t=1;


let orden = new Array(pot);

for (let i=0  ; i < y; i++){
    
let base = new Array(x);
 console.log("columna",t);
  for (let j=0 ; j < x; j++){
    base[j] = prompt("Dame un numero:  ");
    w=0;
       for (let u=0 ; u < pot; u++){
           if (base[j]-1==w)
           orden[w]=base[j]
           w++;
       }
    
}
      completo[i]=base;
      t++;
}
 for (let l=0 ; l < y; l++){
    console.log(completo[l]);
}

console.log (orden)

sum=0;
 for (let l=0 ; l < pot; l++){
     
     if(orden[l]==l+1){
         sum=sum+1
     }
}
if(sum==pot){
    console.log("El arreglo tiene consecutivos");}
if(sum!=pot)
{    console.log("El arreglo no tiene consecutivos");}
