const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/Limpteam', {
  useNewUrlParser:true
});


//Express templating
app.set('view engine', 'pug');
app.set('views','SERVIDOR/view');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// funcion "get" para obtener la ruta
app.get('/categorias', (req,res)=>{
  res.render('categorias');
})


// funcion "get" para obtener la ruta
app.get('/articulos', (req,res)=>{ 
    Categ.find((err,categorias)=>{
    res.render('articulos', {categ:categorias});

    });
})


// funcion "get" para obtener la ruta
app.get('/clientes', (req,res)=>{
  res.render('clientes');
})

// funcion "post" para obtener la ruta
app.post('/categorias', (req,res)=>{
  var categ = req.body.categoria;
  var categoria = new Categ({
    nombreCategoria: categ
  })
  categoria.save(function(err,Categ){
    res.render('categorias');
  })
})


//Esquema para guardar en base de datos
var categ = mongoose.Schema({
   nombreCategoria: String,
});

//Modelo de categoria
var Categ = mongoose.model("Categ",categ);



//coneccion al puerto a donde quiero que se vea el servidor
app.listen(4000, ()=>{
  console.log('Servidor andando');
});
