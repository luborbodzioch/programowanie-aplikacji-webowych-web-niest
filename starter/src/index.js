

document.addEventListener("DOMContentLoaded", function () {

    

    const l1 = document.getElementById("l1").value;
    const l2 = document.getElementById("l2").value;
    const l3 = document.getElementById("l3").value;
    const l4 = document.getElementById("l4").value;

     

    var sumaSpan = document.getElementById("suma");
    suma = +l1 + +l2 + +l3 + +l4;
    sumaSpan.innerHTML = suma;

    var sredniaSpan = document.getElementById("avg");
    avg = suma/4;
    sredniaSpan.innerHTML = avg;

    var minSpan = document.getElementById("min");
    min = Math.min(  l1, l2, l3, l4)
    minSpan.innerHTML = min;

    var maxSpan = document.getElementById("max");
    max = Math.max( l1, l2, l3, l4)
    maxSpan.innerHTML = max;

    
});