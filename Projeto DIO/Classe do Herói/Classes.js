class hero {
    constructor(nome, idade, classe) {
      this.nome = nome;
      this.idade = idade;
      this.classe = classe;
    }
  
    atacar() {
      let ataque;
      switch (this.classe) {
        case "mago":
          ataque = "skill";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "punho";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          throw new error("Tipo de herói inválido");
      }
      console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

const heroi = new hero("Pit Xin", 13, "ninja");
heroi.atacar(); 