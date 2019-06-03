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
                console.log(g.precio) 
                var elem = createElement(g.image,g.precio)
                document.getElementById("descuentos").appendChild(elem)
            }
        }
    }    
    
}

function createElement(img,precio,descuento){
    var colw = document.createElement("div")
    colw.className = "col-2"
    var div = document.createElement("div")
    div.className = "card"
    div.style = "widht 18rem;"
    var imge = document.createElement("img")
    imge.className = "card-img-top"
    imge.src = img
    imge.widht = "10"
    imge.height= "160"
    var text = document.createElement("div")
    text.className = "card-body align-self-center"
    var text2 = document.createElement("div")
    text2.className = "card-body align-self-center"
    var cola = document.createElement("div")
    cola.className = "col-md-12 "
    var cola2 = document.createElement("div")
    cola.className = "col-md-12" 
    var price = document.createElement('h5')
    var desc = document.createElement('h5')
    price.className = "card-title "
    console.log(price)
    price.innerHTML = precio
    desc.innerHTML = descuento
    cola.appendChild(price)
    cola2.appendChild(desc)
    text.appendChild(cola)
    div.appendChild(imge)
    div.appendChild(text)
    div.appendChild(text2)
    colw.appendChild(div)
    return colw

}
