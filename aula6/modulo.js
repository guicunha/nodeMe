var Aluno = module.exports = function(nome){
    this.nome = nome;
}

Aluno.prototype = {
    imprimeNome: function(){
        console.log(this.nome);
    }
}