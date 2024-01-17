let resultado = saldodeRanqueadas(78, 34)
const patente = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function saldodeRanqueadas(vitorias, derrotas,) {
    let resultado = vitorias - derrotas
    return resultado 
}

if (resultado < 10) {
console.log ("O herói tem saldo de " + (resultado) + " vitórias, e está no nível " + (patente[0]))

} else if (resultado == 11 || resultado <= 20) {
    console.log("O herói tem saldo de " + (resultado) + " vitórias, e está no nível " + (patente[1]))

} else if (resultado == 21 || resultado <= 50) {
    console.log("O herói tem saldo de " + (resultado) + " vitórias, e está no nível " + (patente[2]))

} else if (resultado == 51 || resultado <= 80) {
    console.log("O herói tem saldo de " + (resultado) + " vitórias, e está no nível " + (patente[3]))

} else if (resultado == 81 || resultado <= 90) {
    console.log("O herói tem saldo de " + (resultado) + " vitórias, e está no nível " + (patente[4]))

}  else if (resultado == 91 || resultado <= 100) {
    console.log("O herói tem saldo de " + (resultado) + " vitórias, e está no nível " + (patente[5]))

} else {
    console.log("O herói tem saldo de " + (resultado) + " vitórias, e está no nível " + (patente[6]))
}
