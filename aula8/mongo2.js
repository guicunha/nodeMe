var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/egenial_nodejs');

var AlunoSchema = new mongoose.Schema({
  nome: { type: String, index: false, unique: true},
  idade: { type: Number, index: true}
});

mongoose.model('Aluno', AlunoSchema);

var Aluno = mongoose.model('Aluno');


/*

var aluno = new Aluno();
aluno.nome = 'Antonio';
aluno.idade = 24;

aluno.save(function(err) {
  if (err) throw err;
  console.log('salvo com sucesso');
});

var aluno2 = new Aluno(
        {
            nome: 'Carlos', 
            idade: 17
        }, function(err, info){
    console.log(err);
    console.log(info);
});
aluno2.save(function(err){
    if(err) throw err;  
    console.log('salvo com sucesso');
});


Aluno.find({idade: { $gt : 26}}, function(err, alunos) {
  if (err) throw err;
  alunos.forEach(function(aluno) {
    console.log('nome:' + aluno.nome);
    console.log('idade:' + aluno.idade);
  });
  mongoose.disconnect();
});

*/