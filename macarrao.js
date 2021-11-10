let macarrao = 8;

const tempoPreparo = (macarrao) => {
  if (macarrao < 8) {
    console.log("Comida sem tempo de preparo suficiente");
  }
  else if (macarrao == 8 || macarrao <=16) {
    console.log("Prato pronto, bom apetite!!!");
  }
  else if (macarrao > 16 && macarrao <= 24) {
    console.log("Sua comida queimou!!!")
  }
  else {
    console.log("KABUUUMMMM");
  }
}
(tempoPreparo(25)); 
