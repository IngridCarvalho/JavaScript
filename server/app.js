var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var dataAtual = new Date();

var dados = [
  {
    date: dataAtual, 
    description: "Receita de vendas",
    type: "Credit",
    value: 100
  },
  {
    date: dataAtual, 
    description: "Saída referente a pagamento",
    type: "Debit",
    value: 100
  }
];

//avoids the error of CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.get('/movements', function(req, res) {
    res.json(dados);
  });

  app.post('/movements', function(req, res){
    
   console.log(req.body);
   req.body.date = new Date(req.body.date.replace(/-/g,'/'));
   dados.push(req.body);
   res.status(200).json("Negociação recebida");
  })
  

  app.listen(3030, function() {
    console.log('Servidor rodando na porta 3030.');
  });