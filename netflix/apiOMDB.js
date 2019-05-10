var urlSend= "http://www.omdbapi.com/?apikey=41edd7cb&";
var datos = JSON.parse(data);
var conn = new connectionApi(); 
var buscar = "t=2012" 


var image = document.createElement('img')
image.src= resolve.Poster
document-getElementId('Elemento').AppendChild(image)


var title = document.createElement('H1')
title.innerHTML = revolve.Title


function loadCatalog(value){
	for (var i = 0; i <= 3; i++) {
   		if(datos[0].movies[i].gender=value)
   			console.log(datos[0].movies[i].nameMovie);
   			for(var j=0; j<=3; j++){
   				conn.infoMovie(urlSend,datos[0].movies[j].nameMovie);
   			}
	}

}


function recibirValor(){
	var ide = document.getElementById('buscador').value;
	var string = "t="+ ide;
	infoMovie(urlSend,string);
};

