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

function serie(name,year){
	movie.call(this,name),
	movie.call(this,year)
}



netflixData.getInfo.setNameMovie('Popeye');
netflixData.getInfo.setYearMovie('1999');

console.log(netflixData.getInfo.nameMovie);
console.log(netflixData.getInfo.yearMovie);


var pelicula = new movie("El regreso del coste","1999");
var serie1 = new serie("El regreso del coste","1999");
console.log(pelicula.nameMovie,pelicula.yearMovie);
serie.prototype=Object.create(movie.prototype);



class movie{

	constructor(name,year){
		this.name=name;
		this.year=year;
	}

	showInfo(){
		console.log("mi pelicula: " + this.name + "año: " + this.year);
	}


}

/*var movie1= new constructor("123","123");
movie1.showInfo();
*/

class serie extends movie{

} 

var s = new serie("costeño",1992);
s.showInfo();
