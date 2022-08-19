function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
/* Prediccion de codigo 
el console.log imprime la informacion de contacto asociada al arreglo ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]

Diagrama en T
Variable : auntContactInfo
Value : ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
*/
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
/* Prediccion de codigo 
el console.log imprime todo el valor de Frozen ["brócoli", "helado", "croqueta de papa"]

Diagrama en T
Variable : produce
Value :  ["manzanas", "naranjas"]

Variable : frozen
Value : ["brócoli", "helado"]
Value : ["brócoli", "helado", "croqueta de papa"]
*/
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/* Prediccion de codigo 
el console.log imprime el valor de ["Bambi", "Beetlejuice", "Toy Story", ("Zoro")]

Diagrama en T
Variable : movieLibrary
Value : ["Bambi", "E.T.", "Toy Story"]
Value:  ["Bambi", "E.T.", "Toy Story", ("Zoro")]
Value:  ["Bambi", "Beetlejuice", "Toy Story", ("Zoro")]

*/