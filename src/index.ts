let n: number = 0;
let edades: number[] = new Array(n);
let promedioEdades: number = 0;
let edadMin: number = 3;
let edadMax: number = 7;

function cargarN(a: number) {
  a = Number(
    prompt(
      "ingrese la cantidad de jugadores de la que desea obtener el promedio"
    )
  );
  n = a;
}
function generarEdadesRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min) + min); //max+1 es para que incluya el valor maximo
}
function cargarEdades(edadesFunction: number[], long: number) {
  let i: number = 0;
  for (i = 0; i < long; i++) {
    edadesFunction[i] = generarEdadesRandom(edadMin, edadMax);
    edades[i] = edadesFunction[i];
  }
}
function obtenerPromedio(edadespromedio: number[], long: number) {
  let i: number;
  let edadfuncion: number = 0;
  for (i = 0; i < long; i++) {
    edadfuncion = edadespromedio[i] + edadfuncion;
  }
  return (promedioEdades = edadfuncion / long);
}
//asdasd
cargarEdades(edades, n);
cargarN(n);
generarEdadesRandom(edadMax, edadMin);
cargarEdades(edades, n);
obtenerPromedio(edades, n);
console.log("la cantidad de jugadores es: " + n);
console.log("las edades de los jugadores de futbol son: " + edades);
console.log(
  "el promedio de edades de los jugadores de futbol es: " + promedioEdades
);
