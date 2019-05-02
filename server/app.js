var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/movements', function(req, res) {
    var dados = [
      {
        date: "10-01-2019", 
        description: "Receita de vendas",
        type: "credit",
        value: 100
      },
      {
        date: "11-01-2019", 
        description: "Saída referente a pagamento",
        type: "debit",
        value: 100
      }
    ];
  
    res.send(JSON.stringify(dados));
  });

  app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000.');
  });