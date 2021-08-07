const conteudo = document.getElementById("conteudo")
function frutas() {
    let frutasAleatorias = [];
    let array = ['MAMÃO', 'AMEIXA', 'AMÊNDOA', 'AÇAÍ', 'CAQUI', 'CAJU', 'MARACUJÁ', 'BANANA', 'UVA', 'ROMÃ', 'ACEROLA', 'CACAU', 'GOIABA', 'GUARANÁ', 'CARAMBOLA', 'KIWI', 'MELÃO', 'MELANCIA', 'MANGA', 'ABACAXI']
    let listaDePalavras = document.createElement('div')
    listaDePalavras.classList.add("listaDePalavras")
    conteudo.appendChild(listaDePalavras)
    for(i=0; i<3; i++){
        j = Math.floor(Math.random() *  20)
        frutasAleatorias.push(array[j])
        array.splice(j,1)
        let palavras = document.createElement('p')
        palavras.innerText = (frutasAleatorias[i])
        listaDePalavras.appendChild(palavras)
    }
    return frutasAleatorias
}

function cacaPalavras() {
    let letra = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const space = document.createElement("br")
    conteudo.appendChild(space)
    const box = document.createElement("div")
    let linha = []
    let matriz = []
    for(i=0; i<10; i++){
        for(j=0; j<10; j++){
            linha.push(letra[Math.floor(Math.random() * 26)])
        }
        matriz.push(linha)
        linha = []
    }
    frutasAleatorias = frutas();
    conteudo.appendChild(box)
    box.classList.add("box")
    for (i=0; i<3; i++) {
        min = Math.ceil(frutasAleatorias[i].length-1);
        max = Math.floor(9);    
        j = Math.floor(Math.random() * 9)
        for (l = Math.floor(Math.random() * (max - min)) + min, k = 0; frutasAleatorias[i].length - k - 1 >= 0; l--, k++) {
            matriz[j][l] = frutasAleatorias[i][frutasAleatorias[i].length - k - 1];
        }
    }
    for(i = 0; i<10;i++){
        let linha = document.createElement('div')
        linha.classList.add("linha")
        for(j=0; j<10;j++){
            let letras = document.createElement('span')
            letras.addEventListener("mousedown", function(event) {
                letras.style.color = "#ffc6bf";
            }, false)
            letras.classList.add("letras")
            letras.innerText = (matriz[i][j])
            linha.appendChild(letras)
        }
        box.appendChild(linha)
    }
    return matriz
}
cacaPalavras()