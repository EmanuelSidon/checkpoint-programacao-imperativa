
let carne = 15;

const tempoPreparo = (carne) => {
  if (carne < 15) {
    console.log("Comida sem tempo de preparo suficiente");
  }
  else if (carne == 15 || carne <=30) {
    console.log("Prato pronto, bom apetite!!!");
  }
  else if (carne > 30 && carne <= 45) {
    console.log("Sua comida queimou!!!")
  }
  else {
    console.log("KABUUUMMMM");
  }
}
(tempoPreparo(47));

