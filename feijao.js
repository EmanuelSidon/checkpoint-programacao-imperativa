let feijao = 12;

const tempoPreparo = (feijao) => {
  if (feijao < 12) {
    console.log("Comida sem tempo de preparo suficiente");
  }
  else if (feijao == 12 || feijao <=24) {
    console.log("Prato pronto, bom apetite!!!");
  }
  else if (feijao > 24 && feijao <= 36) {
    console.log("Sua comida queimou!!!")
  }
  else {
    console.log("KABUUUMMMM");
  }
}
(tempoPreparo(37));