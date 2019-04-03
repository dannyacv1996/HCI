var netflixData = netflixData || {};

netflixData.getInfo ={
	nameMovie:"",
	yearMovie:"",
	setNameMovie: function(name){
		this.nameMovie = name;
	},
	setYearMovie: function(year){
		this.yearMovie = year;
	}
}

function movie(name,year){
	this.nameMovie=name,
	this.yearMovie=year
}


movie.prototype.showInfo = function(){
	console.log(this.nameMovie,this.yearMovie);
}



netflixData.getInfo.setNameMovie('Popeye');
netflixData.getInfo.setYearMovie('1999');

console.log(netflixData.getInfo.nameMovie);
console.log(netflixData.getInfo.yearMovie);


var pelicula = new movie("El regreso del coste","1999");
console.log(pelicula.nameMovie,pelicula.yearMovie);
