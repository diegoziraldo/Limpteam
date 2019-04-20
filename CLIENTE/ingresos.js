$.ajax({
    type:"get",
    url: "http://localhost:4000/articulos",

    success: function(categorias){

    var html = "";
    for(var i=0;i<categorias.length;i++){
        html +="<option>" + categorias[i].nombreCategoria + "</option>"
    }

    $("#articulos").append(html);
    }
  })