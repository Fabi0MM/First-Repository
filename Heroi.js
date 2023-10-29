let Nome = "Xin"
let Exp = "7500"
let Nivel = [ "Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]


if (Exp <= 1000) { 
    console.log("O herói de nome " + (Nome) + " está no nível de " + (Nivel[0]))

} else if (Exp == 1001 || Exp <= 2000) {
    console.log("O herói de nome " + (Nome) + " está no nível de " + (Nivel[1]))

} else if (Exp == 2001 || Exp <= 5000) {
    console.log("O herói de nome " + (Nome) + " está no nível de " + (Nivel[2]))

} else if (Exp == 5001 || Exp <= 7000) {
    console.log("O herói de nome " + (Nome) + " está no nível de " + (Nivel[3]))

} else if (Exp == 7001 || Exp <= 8000) {
    console.log("O herói de nome " + (Nome) + " está no nível de " + (Nivel[4]))

}  else if (Exp == 8001 || Exp <= 9000) {
    console.log("O herói de nome " + (Nome) + " está no nível de " + (Nivel[5]))

} else if (Exp == 9000 || Exp <= 10000) {    
    console.log("O herói de nome " + (Nome) + " está no nível de " + (Nivel[6]))

} else {
    console.log("O herói de nome " + (Nome) + " está no nível de " + (Nivel[7]))
}


