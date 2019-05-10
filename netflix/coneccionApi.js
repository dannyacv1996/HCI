
class connectionApi {

	constructor () {
		this.urlApi
	}

	infoMovie(url,string){
	var request = new XMLHttpRequest();
	request.open('GET', url + string, true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		console.log(data)
		var textTitle =  document.getElementById('name');
		var textYear  =  document.getElementById('year');
		var img 	  =  document.getElementById('image');
		var rating    =  document.getElementById('rating');
		console.log(data)
		textTitle.textContent = data.Title; 
		textYear.textContent = data.Year;
		
		var calificacion = parseFloat(data.imdbRating);
		var calificacion = (calificacion/10)*100
		rating.style.width = calificacion+'%';
		rating.innerHTML = calificacion+'%';
		img.src = data.Poster;

		
	};
	request.send();
	}		


	loadJson(){

	}

}

