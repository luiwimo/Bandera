(function(){
    "use strict"

    var banderas = document.querySelector('.flags')
    banderas.innerHTML=''//Esto va a borrar el contenido de flags


    console.log(datos);
    //
    console.log(datos[144]);
    //1.-Escoger tres paises aleatoriamente
    console.log(Math.floor(Math.random()*250)); //Aleatorio entre 0-250
    //ceil --> redondea hacia arriba
    //floor --> redondea hacia abajo

    function obtenerPais(){
        var random = (Math.floor(Math.random()*datos.length))
        console.log("Numero de pais: ",random);
        return datos[random]
    }
    
    var paises = []

    
    for(var i=0 ; i<3; i++){
    
        paises.push(obtenerPais())
    }
    

    console.log(paises)

    //3. Elegir pais correcto
    var paisCorrecto = paises[Math.floor(Math.random() * paises.length)]
    console.log(paisCorrecto)

    //4.Borrar texto en default y escribir país correcto
    var textoPais = document.getElementById('country-name')
    textoPais.innerHTML = paisCorrecto.translations.es

    //6.Borrar datos default correcto y capital
    var respuesta = document.getElementById('answer')
    var poblacion = document.getElementById('population')
    var capital = document.getElementById('capital')

    respuesta.innerHTML = ''
    poblacion.innerHTML = ''
    capital.innerHTML = ''

    //2.Mostrar tres paises aleatorios
    for(var i=0; i<paises.length; i++){//Recorrer lista
        var img = document.createElement('img') //Crea label img
        img.setAttribute('src',paises[i].flag)//Agrega atributo a etiqueta
        img.setAttribute('id',paises[i].name)
        img.addEventListener('click',function(evento){
            console.log(evento.target)
            console.log(evento.target.id)
    
    //5.Compara el nombre de pais correcto y pais seleccionado
            if(paisCorrecto.name === evento.target.id){
                respuesta.innerHTML = "Correcto"
                poblacion.innerHTML = "Poblacion: "+paisCorrecto.population
                capital.innerHTML = "Capital: "+paisCorrecto.capital
            }else{
                respuesta.innerHTML = "Incorrecto"
            }
            
        })
        banderas.appendChild(img)
    }
    
})()