const prompt = require('prompt-sync')()

// 1. Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.
const carro = {
    marca: prompt("Insira a marca do carro: "),
    modelo: prompt("Insira o modelo do carro: "),
    ano: prompt("Insira o ano de fabricação do carro: "),
    cor: prompt("Por último, insira a cor do carro: ")
}

console.log("Abaixo estão as informações fornecidas do carro:")
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`)
}

console.log("----------------------------------")

/* 2. Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in.
Se não existir, adicione essa propriedade ao objeto. */
const livro = {
    titulo: prompt("Insira o título do livro: "),
    autor: prompt("Insira o autor(a) do livro escolhido: "),
    anoPublicacao: prompt("Diga qual o ano de publicação do livro: "),
    genero: prompt("Digite o gênero do livro: ")
}

let editoraPresente = false;
for(let propriedade in livro) {
    if (propriedade === "editora"){
        editoraPresente = true;
        break
    }
}

if (!editoraPresente){
    livro.editora = "Companhia das Letras"
}

console.log(livro)
console.log("----------------------------------")

/* 3. Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico.
Use for in para filtrar as propriedades. */
const produto = {
    nome: 'Óculos',
    valor: 79,
    quantidade: 50
}

function filtrarPropriedades(obj, valorMinimo) {
    let novoObjeto = {};

    for (let propriedade in obj) {
        if (obj[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = obj[propriedade];
        }
    }
    return novoObjeto;
}

const resultado = filtrarPropriedades(produto, 50)
console.log(resultado)
console.log("----------------------------------")

/* 4. Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. 
Use for of para exibir as informações de cada pessoa no console. */
const pessoas = [
    {nome: 'Nicolas', idade: 21, cidade: 'Porto Alegre'},
    {nome: 'Leonardo', idade: 19, cidade: 'São Paulo'},
    {nome: 'Pietro', idade: 8, cidade: 'Porto Alegre'},
    {nome: 'Gracyanne', idade: 16, cidade: 'Guaíba'} 
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}

console.log("----------------------------------")

/* 5. Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. 
Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média. */
const alunos = [
    {nome: 'Nicolas', nota1: 10, nota2: 8},
    {nome: 'Leonardo', nota1: 5, nota2: 7},
    {nome: 'Pietro', nota1: 8, nota2: 8},
    {nome: 'Gracyanne', nota1: 4, nota2: 10}
]

for(const aluno of alunos){
    const media = ((aluno.nota1 + aluno.nota2) / 2)
    console.log(`A nota média do aluno ${aluno.nome} é ${media}`)
}

console.log("----------------------------------")

/* 6. Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario.
Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico. */
const funcionarios = [
    {nome: 'Pedro', cargo: 'UX Designer', salario: 2884},
    {nome: 'João', cargo: 'Desenvolvedor Front-End', salario: 4814},
    {nome: 'Vinicius', cargo: 'Desenvolvedor Back-End', salario: 5678}
]

const salarioMinimo = 3000

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo){
        console.log(`Nome do funcionário: ${funcionario.nome}, cargo responsável: ${funcionario.cargo}, salário: ${funcionario.salario}`)
    }
}

console.log("----------------------------------")

/* 7. Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. 
Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço. */
const produtos = [
    {nome: 'Pão', preco: 16.98, desconto: 0},
    {nome: 'Manteiga', preco: 38.90, desconto: 0},
    {nome: 'Queijo', preco: 22.45, desconto: 0},
    {nome: 'Presunto', preco: 32.90, desconto: 0}
]

produtos.forEach((produto) => {
    let desconto = produto.preco * 0.10
    produto.preco -= desconto
    console.log(`O produto "${produto.nome}" teve um desconto de 10%! O valor foi alterado para R$${produto.preco.toFixed(2)}`)
})

console.log("----------------------------------")

/* 8. Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. 
Use forEach para criar um novo array contendo apenas os títulos dos filmes. */
const filmes = [
    {titulo: "À Espera de um Milagre", diretor: "Frank Darabont", anoLancamento: 2000},
    {titulo: "O Rei Leão", diretor: "Roger Allers", anoLancamento: 1994},
    {titulo: "O Poderoso Chefão", diretor: "Francis Ford", anoLancamento: 1972},
    {titulo: "Vingadores: Ultimato", diretor: "Joe Russo", anoLancamento: 2019}
]

const titulos = []

filmes.forEach(filme => titulos.push(filme.titulo)) 
console.log(titulos);

console.log("----------------------------------")

/* 9. Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade.
Use forEach para contar quantos clientes têm mais de 30 anos. */
const clientes = [
    {nome: "Jacqueline", idade: 41, cidade: "Porto Alegre"},
    {nome: "Flávio", idade: 43, cidade: "Porto Alegre"},
    {nome: "Pietro", idade: 8, cidade: "Porto Alegre"}
]

let counter = []

clientes.forEach((cliente) =>{
    if (cliente.idade > 30) {
        counter++
    }
})

console.log(`O total de clientes que têm idade acima de 30 anos é de: ${counter}`)
console.log("----------------------------------")

/* 10. Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. 
Use forEach para calcular o valor total de vendas de todos os produtos. */
const vendas = [
    {produto: "Lápis", quantidade: 5, valor: 11.60},
    {produto: "Borracha", quantidade: 1, valor: 19.90},
    {produto: "Caneta", quantidade: 3, valor: 34.53},
]

let valorTotal = 0;
vendas.forEach((venda) => {
    valorTotal += venda.quantidade * venda.valor
})

console.log(`O valor total das vendas realizadas é de R$ ${valorTotal.toFixed(2)}`)
console.log("----------------------------------")

/* 11.Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. 
Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente. */

const pedidos = [
    {cliente: "Jacqueline", produto: "Chá", quantidade: 2},
    {cliente: "Flavio", produto: "Café", quantidade: 3},
    {cliente: "Pietro", produto: "Iogurte", quantidade: 4},
]

const quantidadePorCliente = {}
pedidos.forEach((pedido) => {
    if(quantidadePorCliente[pedido.cliente]) {
        quantidadePorCliente[pedido.cliente] += pedido.quantidade;
    } else {
        quantidadePorCliente[pedido.cliente] = pedido.quantidade
    }
})

console.log(quantidadePorCliente)
console.log("----------------------------------")

/* 12.Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. 
Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */
const estoque = [
    {produto: "Computador", quantidade: 5, minimo: 10},
    {produto: "Celular", quantidade: 8, minimo: 15},
    {produto: "Relógio", quantidade: 10, minimo: 5},
]

estoque.forEach((item) => {
    if (item.quantidade < item.minimo){
        item.quantidade *= 2
        console.log(`Quantidade do produto '${item.produto}' insuficiente! A quantidade foi atualizada para ${item.quantidade}`)
    }
})

console.log(estoque)
console.log("----------------------------------")

/* 13.Crie um objeto carrinho com uma propriedade itens, que é um array de objetos.
Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario.
Use forEach para calcular o valor total do carrinho. */
const carrinho = {
    itens: [
        {nome: "Escova", quantidade: 2, precoUnitario: 3.35},
        {nome: "Pasta", quantidade: 1, precoUnitario: 2.49},
        {nome: "Sabonete", quantidade: 3, precoUnitario: 2.99}
    ]
}

let valorTotalCarrinho = 0;

carrinho.itens.forEach((item) => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario
})

console.log(`Valor Total das compras: R$ ${valorTotalCarrinho.toFixed(2)}`)
console.log("----------------------------------")

/* 14. Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos.
Cada departamento tem um nome e uma lista de funcionarios. 
Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence. */
const empresa = {
    departamentos: [
        {
            nome: "Financeiro",
            funcionarios: ['Pedro', 'Marley', 'Alziro']
        },

        {
            nome: "Marketing",
            funcionarios: ['João', 'Ana']
        },

        {
            nome: "Jurídico",
            funcionarios: ['Domingos', 'Maria']
        }
    ]
}

for(let departamento in empresa.departamentos) {
    let dpto = empresa.departamentos[departamento]
    console.log(`Departamento ${dpto.nome}`)

    for (let funcionario of dpto.funcionarios) {
        console.log(`- Nome do funcionário: ${funcionario}`)
    }
    console.log(' ')
}

console.log("----------------------------------")

/* 15. Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor.
Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas. */
const transacoes = [
    {tipo: "entrada", valor: 500},
    {tipo: "entrada", valor: 300},
    {tipo: "saida", valor: 250},
    {tipo: "saida", valor: 50},
    {tipo: "entrada", valor: 25}
]

let saldoFinal = 0;

transacoes.forEach((transacao) => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor
    } else if (transacao.tipo === "saida") {
        saldoFinal -= transacao.valor
    }
})

console.log(`Após calcular as entradas e saídas, o saldo final é de R$${saldoFinal.toFixed(2)}`)
