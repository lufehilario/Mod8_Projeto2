const form = document.getElementById('form-cadastro');
const nome=[];
const telefone=[];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();    
      adicionaLinha();
      atualizaTabela();
});

function adicionaLinha(){

    const inputNome = document.getElementById('nome-completo');
    const inputTelefone = document.getElementById('tel-numero'); 

    if (nome.includes(inputNome.value )){
        alert(`Nome ${inputNome.value} ja consta cadastrado.`)
    } else {
        nome.push(inputNome.value);
        telefone.push(inputTelefone.value);
        
        let linha = `<tr>`;
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputTelefone.value}</td>`;
            linha += `</tr>`;
            linhas += linha;           
    }
    inputNome.value="";
    inputTelefone.value=""; 
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

