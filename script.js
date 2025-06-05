/*const imagens = [
    "assets/Pedra296854_1920.png",
    "assets/Papel  296855_1920.png",
    "assets/Tesoura 296853_1920.png"
];

let index = 0

const fundo = document.getElementById("fundo");


Object.assign(fundo.style, {
    backgroundImage: `url('${imagens[index]}')`,
    backgroundSize: "150px",


});


function TrocarImagem() {
    fundo.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % imagens.length;
        fundo.style.backgroundImage = `url('${imagens[index]}')`;
        fundo.style.opacity = 1


    }, 1000);
}
setInterval(TrocarImagem, 10000)*/

const resultado = document.querySelector(".Resultado")
const PontosHumano = document.getElementById("PontosHumano")
const PontosMaquina = document.getElementById("PontosMaquina")
const Empate = document.getElementById("Empate")
const Maquina = document.getElementById("Maquina")

let Hpontos = 0
let Mpontos = 0
let Empat = 0


const PlayHumano = (escolhaHumano) => {

    const escolhaMaquina = PlayMaquina()

    Ojogo(escolhaHumano, escolhaMaquina)

    console.log("Voce clicou:", escolhaHumano)

    console.log("Maquina clicou:", escolhaMaquina)
    Maquina.innerHTML = escolhaMaquina


}

const PlayMaquina = () => {
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];
    const numero = Math.floor(Math.random() * 3);
    opcoes.innerHTML = Maquina
    return opcoes[numero]

}

const Ojogo = (Humano, Maquina) => {
    if (Humano === Maquina) {
        resultado.innerHTML = "Deu empate"
        Empat++
        Empate.innerHTML = Empat
    }
    else if (
        (Humano === "Pedra" && Maquina === "Tesoura") ||
        (Humano === "Tesoura" && Maquina === "Papel") ||
        (Humano === "Papel" && Maquina === "Pedra")
    ) {
        resultado.innerHTML = "Voce ganhou"
        Hpontos++
        PontosHumano.innerHTML = Hpontos++
    } else {
        Mpontos++
        PontosMaquina.innerHTML = Mpontos
        resultado.innerHTML = "Voce perdeu"

    }
}
