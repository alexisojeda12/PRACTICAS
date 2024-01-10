x = prompt("De que dimension es x?:  "); //4
y = prompt("De que dimension es y?:  "); //3

let completo = new Array(y);

t=1;
num=0;

for (let i=0  ; i < y; i++){
    
let base = new Array(x);
  for (let j=0 ; j < x; j++){
    pot=num*num;
    base[j] = pot;
    num++;
}
      completo[i]=base;
      t++;
}
 for (let l=0 ; l < y; l++){
    console.log(completo[l]);
}
