var DonaDeCasa = require('./donadecasa');

var donaDeCasa = new DonaDeCasa();

donaDeCasa.on('suco servido', function(suco){
   console.log('suco de ' + suco + ' servido'); 
});

donaDeCasa.fazerSuco('laranja');