
var NomeAdicionados = []

function Adicionar(){

    var nome = document.getElementById('Nome').value
    var sobrenome = document.getElementById('Sobrenome').value
    var list = document.getElementById('list')

    if (nome == '' || sobrenome == '') {
       alert('Preencha os Dois campos Corretamente')
       return
    }
    if (NomeAdicionados.includes(nome) && NomeAdicionados.includes(sobrenome)) {
        alert(`O Nome: ${nome}  ${sobrenome} ja estão inseridos na lista`)
        return
        
    }

    NomeAdicionados.push(nome)
    NomeAdicionados.push(sobrenome)
    var Option = document.createElement('li')
    Option.innerHTML = `Nome: ${nome} Sobrenome: ${sobrenome} <button type="button" class="btn btn-danger" onclick='excluir(this)'>Excluir</button> `;
    list.appendChild(Option)
    console.log(NomeAdicionados)   
}

function excluir(element){
    var remover = element.parentNode;
    remover.parentNode.removeChild(remover);

    var nomeRemovido = remover.textContent.split(" ")[1];
    var sobrenomeRemovido = remover.textContent.split(" ")[3];

    var index = NomeAdicionados.indexOf(nomeRemovido);
    if (index > -1) {
        NomeAdicionados.splice(index, 1);
    }
    index = NomeAdicionados.indexOf(sobrenomeRemovido);
    if (index > -1) {
        NomeAdicionados.splice(index, 1);
    }
}
//conversa com o chat sobre a logica de adição e exclusão https://chat.openai.com/share/8708925b-69d6-435d-8162-d0d6f72ddfb4
