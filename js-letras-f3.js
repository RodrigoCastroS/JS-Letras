var nombre = ['R','O','D','R','I','G','O'];
var count = {};

nombre.forEach(function(letra) {

    count[letra] = (count[letra] || 0 ) +1;
    
});

console.log(count);