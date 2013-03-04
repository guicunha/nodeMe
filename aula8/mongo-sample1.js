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
aluno.nome = 'Fulaninho';
aluno.idade = 30;

aluno.save(function(err) {
  if (err) throw err;
  console.log('salvo com sucesso');
});
*/


var aluno2 = new Aluno({nome: 'jose', idade: '29'}, function(err){
    console.log(err);
});
aluno2.save;

/*
Aluno.find({idade: 30},function(err, aluno){
    console.log(err);
    console.log('nome: ' + aluno.nome + ' idade: ' + aluno.idade);
});
*/
mongoose.disconnect();