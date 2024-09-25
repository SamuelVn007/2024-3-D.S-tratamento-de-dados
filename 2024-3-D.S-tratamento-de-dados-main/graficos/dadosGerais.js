const url = 'https://raw.githubusercontent.com/SamuelVn007/2024-3-D.S-tratamento-de-dados/refs/heads/main/salgados.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)
}

vizualizarInformacoes()