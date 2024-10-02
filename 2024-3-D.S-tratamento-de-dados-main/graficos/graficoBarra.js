
async function criarGraficoBarra(){
    const url= 'https://raw.githubusercontent.com/SamuelVn007/2024-3-D.S-tratamento-de-dados/refs/heads/main/lista.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nome = Object.keys(dados)
    const quantidade = Object.values(dados)

    console.log(Object.keys(dados))

}

criarGraficoBarra()