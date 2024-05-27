/* vinculado a paginas index y contacto*/

alert("Bienvenido a Mística")

var ciudad = prompt ("Ingresa tu ciudad");

switch (ciudad.toLocaleLowerCase()) {
    case "san nicolas":
    case " villa constitucion":
    case "conesa":
    case "ramallo":
        alert ("Tenes envío gratis")
        break;
    default:
        alert ("El costo de envío es $800");
        break;
}

/* Boton Whatsapp*/

document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '3412732531'; 
    const message = 'Hola Mistica! Tengo una consulta.'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}); 

window.addEventListener('beforeunload', function(event) {
    const message = ' Estas abandonando la pagina, ¿Estás seguro?';
    event.preventDefault();  
    event.returnValue = message; 
    return message;
});
