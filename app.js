document.addEventListener('DOMContentLoaded', function (){
    celciusAFahrenheit();

    temperaturaF();

    fahrenheitACelcius();
});


function celciusAFahrenheit() {
    const caf = document.querySelector('.caf');

    caf.addEventListener('click', function() {
        // Obtener valor ingresado
        const dato = parseInt(document.getElementById('dato1').value);

        // Convertir a farenheit
        const temperatura = 1.8 * dato;

        // Crear etiqueta
        console.log(temperatura)
        contenedor = document.getElementById('contenedor-mensajes');
        let labelF = document.createElement('LABEL');
        labelF.innerHTML = temperatura + " °F";
        
        // Mostrar resultado          
        contenedor.appendChild(labelF);    
    });
}

function temperaturaF() {

    const verificar = document.querySelector('.temperatura-F');

    verificar.addEventListener('click', function() {

        // Obtener valor ingresado
        const temperatura = parseInt(document.getElementById('dato2').value);
        console.log(temperatura)

        let mensaje = "";
        let color = "#ffffff";

        // Vefiricar tipo de temperatura
        if ( temperatura >= 14 && temperatura <= 32) {
            mensaje = "Temperatura baja";
            color = "#A3CEEF"; // Azul
        } else if (temperatura > 32 && temperatura <= 68) {
            mensaje = "Temperatura adecuada";
            color = "#95b634"; // Verde
        } else if (temperatura > 68 && temperatura <= 96) {
            mensaje = "Temperatura alta";
            color = "#ff0000"; // rojo
        } else {
            mensaje = "Temperatura desconocida";
            color = "#ffffff";
        }

        // Crear etiqueta
        contenedor = document.getElementById('contenedor-mensajes');
        let label = document.createElement('LABEL');
        label.innerHTML = mensaje;
        
        // Mostrar resultado
        document.body.style.backgroundColor = color;            
        contenedor.appendChild(label);            
    });    
}

function fahrenheitACelcius() {
    const fac = document.querySelector('.fac');

    fac.addEventListener('click', function() {
        // Obtener valor ingresado
        const dato = parseInt(document.getElementById('dato3').value);

        // Convertir valor a celcius
        const temperatura =  Number((dato / 1.8).toFixed(2));

        // Crear etiqueta
        contenedor = document.getElementById('contenedor-mensajes');
        let label = document.createElement('LABEL');
        label.innerHTML = temperatura + " °C";
        
        // Mostrar resultado         
        contenedor.appendChild(label);    
       
    });
}