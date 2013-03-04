function ContaCorrente(nome, sobrenome){
    var saldo = 0;
    return {
        nomeCorrentista: function(){
          return nome + ' ' + sobrenome;  
        },
        depositar: function(valor){
          saldo += valor;
        },
        sacar: function(valor){
          saldo -=valor;
        },
        saldoAtual: function(){
            return saldo;
        },
        estanoVermelho: function(){
            return saldo < 0;
        }
    };
}

var conta = new ContaCorrente('Guilherme', 'Cunha');
conta.depositar(10);
console.log(conta.saldoAtual());