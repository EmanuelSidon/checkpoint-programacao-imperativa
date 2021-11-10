let brigadeiro = 8;

const tempoPreparo = (brigadeiro) => {
  if (brigadeiro < 8) {
    console.log("Comida sem tempo de preparo suficiente");
  }
  else if (brigadeiro == 8 || brigadeiro <=16) {
    console.log("Prato pronto, bom apetite!!!");
  }
  else if (brigadeiro > 16 && brigadeiro <= 24) {
    console.log("Sua comida queimou!!!")
  }
  else {
    console.log("KABUUUMMMM");
  }
}
(tempoPreparo(25));