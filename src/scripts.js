function criaProduto(){
    //retorna valores do formulário
    let nomeProduto = document.getElementById('nomeProduto').value 
    let precoProduto = document.getElementById('precoProduto').value 
    let qtdProduto = document.getElementById('qtdProduto').value 
    
    // retorna Tabela dos produtos
    let tabela = document.querySelector('#tabela')

    let linha = criaLinhaComTresColunas(nomeProduto, precoProduto, qtdProduto)
    
    tabela.appendChild(linha)
        
}

function criaLinhaComTresColunas(valor1, valor2, valor3){
    let linha = document.createElement('tr')

    let coluna1 = document.createElement('td')
    coluna1.textContent = valor1 

    let coluna2 = document.createElement('td')
    coluna2.textContent = valor2

    let coluna3 = document.createElement('td')
    coluna3.textContent = valor3
    
    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    linha.appendChild(coluna3)
    
    return linha

}

