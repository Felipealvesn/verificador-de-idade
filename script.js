function go() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('#txt').value
    
    var resultado = document.querySelector("#resultado") 
    var idade = ano - nasc

    if(nasc > ano) {
        resultado.innerHTML = '[ERRO], DATA DE NASCIMENTO INCORRETA'
    }

    else{
        var sexo = document.getElementsByName('radio')
        var genero = ""
        var img = document.querySelector("#img")
        var senerioridade = document.querySelector("#senerioridade")
    if(sexo[0].checked) {
        var genero = 'Homem'
    }
    else if(sexo[1].checked) {
        var genero = 'Mulher'
    }
     if(genero == 'Mulher' || genero == 'Homem' && idade <= 8 ) {
        img.src = 'imagens/foto-bebe.jpg'
        senerioridade.innerHTML = 'BEBÊ'
    }
     if(genero == 'Mulher' && idade >= 9 && idade <= 14 ) {
        img.src = 'imagens/criança-fem.jpg'
        senerioridade.innerHTML = 'CRIANÇA'
    }
     if(genero == 'Mulher' && idade >= 15 && idade <= 29){
        img.src = "imagens/jovem-fem.jpg"
        senerioridade.innerHTML = 'JOVEM'
    }
    if(genero == 'Mulher' && idade >= 30 && idade <= 49 ){
        img.src = 'imagens/adulto-fem.jpg'
        senerioridade.innerHTML = 'ADULTO'
    }
    if(genero == 'Mulher' && idade >= 50 ){
        img.src = 'imagens/idoso-fem.jpg'
        senerioridade.innerHTML = 'IDOSO'
    }
    if(genero == 'Homem' && idade >= 9 && idade <= 14){
        img.src = 'imagens/criança-masc.jpg'
        senerioridade.innerHTML = 'CRIANÇA'
    }
    if(genero == 'Homem' && idade >= 15 && idade <= 29){
        img.src = 'imagens/jovem-masc.jpg'
        senerioridade.innerHTML = 'JOVEM'
    }
    if(genero == 'Homem' && idade >= 30 && idade <= 49){
        img.src = 'imagens/adulto-masc.jpg'
        senerioridade.innerHTML = 'ADULTO'
    }
    if(genero == 'Homem' && idade >= 50){
        img.src = 'imagens/idoso-masc.jpg'
        senerioridade.innerHTML = 'IDOSO'
    }
    resultado.innerHTML =   genero + ' com ' + idade +  ' anos de idade' 
    
  }

}