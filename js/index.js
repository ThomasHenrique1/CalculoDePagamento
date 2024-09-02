"use strict";

window.onload = function() {
    document.getElementById("botao").onclick = function() {
        calcular();
    };
};

function calcular() {
    var valor = parseFloat(document.getElementById("txtvalor").value);
    var forma_pag = parseInt(document.getElementById("txtpagamento").value);
    var valor_total = 0;

    switch (forma_pag) {
        case 1: 
            valor_total = valor - (valor * 0.10);
            break;
        case 2: 
            valor_total = valor - (valor * 0.05);
            break;
        case 3: 
            valor_total = valor + (valor * 0.05);
            break;
        case 4: 
            valor_total = valor + (valor * 0.10);
            break;
        case 5: 
            valor_total = valor + (valor * 0.15);
            break;
        case 6: 
            valor_total = valor - (valor * 0.07);
            break;
    }

    document.getElementById("txtreal").value = valor.toFixed(2);
    document.getElementById("txtpagar").value = valor_total.toFixed(2);
}
