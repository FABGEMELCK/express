const formaDePago = document.getElementById("validate");
const nombre = document.getElementById("fname");
const dirección = document.getElementById("adr");
const tarjetaDeCredito = document.getElementById("ccnum");

validate.addEventListener("submit", (e)=>{
        e.preventDefault();
        alert("Gracias  " +nombre.value+"  por tu compra"+
             "  Se enviará su producto a:  " +dirección.value+"  sin costo"+
             "  Se cobrará a la tarjeta de crédito:  " +tarjetaDeCredito.value+"  sin IVA");
});   
