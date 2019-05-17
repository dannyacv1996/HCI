var urlSend= "http://www.omdbapi.com/?apikey=41edd7cb&";
var datos = JSON.parse(data);
var conn = new connectionApi(); 
var buscar = "t=2012" 


function loadCatalog(value){
	console.log(value)
	for(var i in datos[0].movies){
		if(datos[0].movies[i].gender == value){
			for(var k in datos[0].movies[i].movies){
				var string = datos[0].movies[i].movies[k].nameMovie
				conn.infoMovie(urlSend, "t="+string)
			}	
		}
			
	}

	
};


conn.infoMovie(urlSend,buscar);

function recibirValor(){
	var ide = document.getElementById('buscador').value;
	var string = "t="+ ide;
	conn.infoMovie(urlSend,string);
};

