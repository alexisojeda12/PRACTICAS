 console.log("TORNEO DE FUT");
 console.log("Equipos clasificados");
 let equipos = new Array (8); 
 
 for (let i=0  ; i < 8; i++){
 equipos[i] = prompt("Ingresa el equipo  :  ");
 }
 
let semis = new Array (4); 

  console.log("Cuartos de final");
t=0;

for (let i=0  ; i < 8; i++){
console.log(equipos[i], "vs" ,equipos[i+1]);
 semis[t] = prompt("Quien gano?  :  ");
i=i+1
t++;
 }
 
 let final = new Array (2); 

  console.log("Semifinal");
 t=0;
 for (let i=0  ; i < 4; i++){
console.log(semis[i], "vs" ,semis[i+1]);
 final[t] = prompt("Quien gano?  :  ");
i=i+1
t++;
 }
 i=0;
  console.log("FINAL");
 console.log(final[i], "vs" ,final[i+1]);
 ganador =prompt( "Quien gano?  :  ");
 
  console.log("Ganador", ganador);
