var url= "http://www.omdbapi.com/?apikey=41edd7cb&";

function infoMovie(url,string){

	var request = new XMLHttpRequest();
	request.open('GET',url + string, true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		console.log(data.Poster,data.Year,data.Tittle);
	};

	request.send();

}


infoMovie(url,"t=Shazam");

