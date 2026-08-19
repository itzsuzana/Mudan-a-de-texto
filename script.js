const textoCor = document.getElementById("color");
const textoFonte = document.getElementById("fonte");
const cartao = document.querySelector(".cartao");

function ativarNoturno() {

    document.body.classList.add("modo-noturno");

    cartao.classList.add("cartao-noturno");
}


function ativarDiurno() {

    document.body.classList.remove("modo-noturno");

    cartao.classList.remove("cartao-noturno");
}

// =========================
// MUDAR COR
// =========================

function mudarCor(cor) {

    textoCor.style.color = cor;
}

// =========================
// AUMENTAR FONTE
// =========================

function aumentarFonte() {

    textoFonte.style.fontSize = "26px";
}


// =========================
// DIMINUIR FONTE
// =========================

function diminuirFonte() {

    textoFonte.style.fontSize = "14px";
}


// =========================
// TAMANHO NORMAL
// =========================

function tamanhoNormal() {

    textoFonte.style.fontSize = "18px";
}


// =========================
// RESTAURAR
// =========================

function restaurarPagina() {

    textoCor.style.color = "";

    textoFonte.style.fontSize = "";

    document.body.style.background =
        "linear-gradient(135deg, #667eea, #764ba2)";

    document.body.style.color = "#2d3436";
}