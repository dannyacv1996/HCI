var Data = JSON.parse(daticos);
console.log(Data)

loadNuevos(Data)
loadDescuentos(Data)

function loadNuevos(Data){
    for(var i in Data[0].productos){
        if(Data[0].productos[i].tipo == "tipo1" ){
            console.log(Data[0].productos[i].tipo)
            for(var j in Data[0].productos[i].productos){
                var g = Data[0].productos[i].productos[j]
                console.log(g.precio) 
                var elem = createElement(g.image,g.precio)
                document.getElementById("nuevos").appendChild(elem)
            }
        }
    }
}

function loadDescuentos(Data){
    for(var i in Data[0].productos){
        if(Data[0].productos[i].tipo == "tipo2" ){
            for(var j in Data[0].productos[i].productos){
                var g = Data[0].productos[i].productos[j]
                console.log(g.precio,g.nombreProducto) 
                var elem = createElement(g.image,g.precio,g.nombreProducto)
                document.getElementById("descuentos").appendChild(elem)
            }
        }
    }    
    
}

function createElement(img,precio,name){
    var imprimir = document.createElement("div")
    imprimir.className = "col-2"
    var div = document.createElement("div")
    div.className = "card"
    div.style = "widht 18rem;"
    var imge = document.createElement("img")
    imge.className = "card-img-top"
    imge.src = img
    imge.widht = "10"
    imge.height= "160"
    var text = document.createElement("div")
    text.className = "card-body "
    var text1 = document.createElement("div")
    text.className = "card-body "
    var cola = document.createElement("div")
    cola.className = "col-md-12 " 
    var price = document.createElement('h6')
    var nombre = document.createElement('h6')
    price.className = "card-title "
    console.log(price)
    price.innerHTML = precio
    nombre.innerHTML = name
    cola.appendChild(price,name)
    text.appendChild(cola)
    div.appendChild(imge)
    div.appendChild(text)
    imprimir.appendChild(div)
    return imprimir

}