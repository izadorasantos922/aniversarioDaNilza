let convidados = ['Igor', 'Rogerio', 'Marlucia', 'Thiago', 'Roberto', 'Izadora', 'Daiane', 'Nilza', 'Izabella', 'Gracielly'];

let podeConvidar = ['Roberto', 'Izadora', 'Marucia', 'Nilza'];

function verificar(){
    let nome = document.getElementById('nome').value;
    let convidou = document.getElementById('convidou').value;


    if (convidados.includes(nome)){
        if ( podeConvidar.includes(convidou)){
        document.getElementById('hide').innerHTML = "Pode entrar";
    }}else {
        document.getElementById('hide').innerHTML = "Não pode entrar, seu nome não está na lista";
    }
}