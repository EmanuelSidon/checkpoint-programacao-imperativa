let pipoca = 10;

const tempoPreparo = (pipoca) => {
  if (pipoca < 10) {
    console.log("Comida sem tempo de preparo suficiente");
  }
  else if (pipoca == 10 || pipoca <=20) {
    console.log("Prato pronto, bom apetite!!!");
  }
  else if (pipoca > 20 && pipoca <= 30) {
    console.log("Sua comida queimou!!!")
  }
  else {
    console.log("KABUUUMMMM");
  }
}
(tempoPreparo(31)); 