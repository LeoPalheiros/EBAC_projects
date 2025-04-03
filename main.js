// Classe base Personagem - ABSTRAÇÃO 
class Personagem {
    constructor(nome, vida, ataque, defesa, exp = 0, nivel = 1) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.exp = exp;
        this.nivel = nivel;
    }

    atacar(alvo) {
        let dano = this.ataque - alvo.defesa;
        dano = dano > 0 ? dano : 1;
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }

    ganharExp(valor) {
        this.exp += valor;
        if (this.exp >= 100) {
            this.subirNivel();
        }
    }

    subirNivel() {
        this.nivel++;
        this.exp = 0;
        this.vida += 10;
        this.ataque += 2;
        this.defesa += 2;
        console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    }
}

// Classes Herdeiras - (Guerreiro, Mago, Cureandeiro, Assassino)

// Classe Guerreiro
class Guerreiro extends Personagem {
    constructor(nome) {
        super(nome, 120, 23, 10);
        this.arma = "Espada do Rei";
    }

    golpePesado(alvo) {
        let dano = this.ataque * 2 - alvo.defesa;
        dano = dano > 0 ? dano : 1;
        alvo.vida -= dano;
        console.log(`${this.nome} usou Golpe Pesado com ${this.arma}, causando ${dano} de dano em ${alvo.nome}!`);
    }
}

// Classe Mago
class Mago extends Personagem {
    constructor(nome) {
        super(nome, 80, 22, 5);
        this.arma = "Capuz da Morte de Rabadon";
    }

    lancarMagia(alvo) {
        let dano = this.ataque * 1.5 - alvo.defesa;
        dano = dano > 0 ? dano : 1;
        alvo.vida -= dano;
        console.log(`${this.nome} lançou uma magia com ${this.arma}, causando ${dano} de dano em ${alvo.nome}!`);
    }
}

// Classe Curandeiro
class Curandeiro extends Personagem {
    constructor(nome) {
        super(nome, 70, 5, 15);
        this.arma = "Pedra Lunar";
    }

    curar(alvo) {
        let cura = 20;
        alvo.vida += cura;
        console.log(`${this.nome} curou ${alvo.nome} em ${cura} pontos de vida!`);
    }
}

// Classe Assassino
class Assassino extends Personagem {
    constructor(nome) {
        super(nome, 100, 30, 12);
        this.arma = "Hubris";
    }

    ataqueSombra(alvo) {
        let dano = this.ataque * 2.5 - alvo.defesa;
        dano = dano > 0 ? dano : 1;
        alvo.vida -= dano;
        console.log(`${this.nome} realizou um Ataque Sombrio com ${this.arma}, causando ${dano} de dano em ${alvo.nome}!`);
    }
}

// Criando instâncias dos personagens
const guerreiro = new Guerreiro("Yasuo");
const mago = new Mago("Veigar");
const curandeiro = new Curandeiro("Soraka");
const assassino = new Assassino("Kayn");

// Simulando interações
mago.lancarMagia(guerreiro);
guerreiro.golpePesado(mago);
curandeiro.curar(mago);
assassino.ataqueSombra(guerreiro);

// Mostrando os status finais
console.log(guerreiro);
console.log(mago);
console.log(curandeiro);
console.log(assassino);
