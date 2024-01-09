num = prompt("Ingresar cuantos numeros quiere leer:  ");
    console.log("el numero ingresado es: ",num);
      let nums = new Array(num);
for (let i = 0 ; i < num; i++){
  
    nums[i] = prompt("Ingresar el numero  :  ");
}
esc = prompt("Escoge un numero a comparar:  ");
 cont=0
 i=0;
    for (let j = 0 ; j < num; j++){
    if (esc<nums[i])
    cont=cont+1;
    i++
    }
 console.log("Existen",cont,"numeros en tu lista mayores que ", esc);
    
