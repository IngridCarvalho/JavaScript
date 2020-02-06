/*Simple code for provide service to aplication */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var dataAtual = new Date();

var dados = [
  {
    id: 1,
    date: dataAtual, 
    description: "Receita de vendas",
    type: "Credit",
    value: 150
  },
  {
    id: 2,
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
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.get('/movements', function(req, res) {
    res.json(dados);
  });

app.post('/movements', function(req, res){
  
  console.log(req.body);
  req.body._date = new Date(req.body._date);
  const movement = {
    id: req.body._id,
    date: req.body._date, 
    description: req.body._description,
    type: req.body. _typeMovement,
    value: req.body._value
  }
  dados.push(movement);
  res.status(200).json("Negociação recebida");
});

app.delete('/movements/:id', function(req, res){
  let movement = dados.filter(movement => movement.id == req.params.id);
  let index = dados.indexOf(movement[0]);

  dados.splice(index, 1);

  res.status(200).json("Excluído com sucesso");
});


app.listen(3030, function() {
  console.log('Servidor rodando na porta 3030.');
});