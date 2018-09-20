
//Tomamos los valores dados por el usuario en filas, columnas y cantidad de bombas para crear el tablero de juego
var columnas=0;
var fil=0;
var bombas=0;


$(document).ready(function(){
    $("#aceptar").click(function(){
        fil=parseInt($("#filas").val());
        columnas=parseInt($("#columnas").val());
        crearTabla();
        crearFilas();
        crearTablero();
        inicializarMatriz(tablero);
        colocarMinas(tablero);
        minas(contarBombas(),tablero);
        
    });   
});

function crearTabla(){
    var tabla="";
    tabla+="<table class='table-bordered'>";
        for(var i=0;i<fil;i++){
            tabla+="<tr>";
                for(var j=0;j<columnas;j++){
                    tabla+="<td>0</td>";   
                }
            tabla+="</tr>";
        }
    tabla+="</table>";
    $("#tabla").html(tabla);
}
    
//Arreglo unidimensional
function crearFilas(){
    var tablero= new Array(fil); 
}

//Ciclo for para crear el arreglo bidimensional
function crearTablero(){
    for(var i=0;i<tablero.length;i++){ 
        tablero[i] = new Array();
    }
}

//Inicializacion de la matriz con valores 0
function inicializarMatriz(){
    for(var i=0;i<tablero.length;i++){
        for(var j=0;j<columnas;j++){
            tablero[i][j]=0;
        }
    } 
}

//Generar las minas en el tablero en posiciones aleatorias
function colocarMinas(){
    var posx=Math.floor((Math.random() * (tablero.length-1)) + 1);//Generamos numeros aleatorios para la posicion X
    var posy=Math.floor((Math.random() * columnas-1) + 1);//Generamos numeros aleatorios para la posicion Y
    for(var i=0;i<bombas;i++){
        if(tablero[posx][posy] == "*"){
            var posx=Math.floor((Math.random() * (tablero.length-1)) + 1);
            var posy=Math.floor((Math.random() * columnas-1) + 1);
        } 
        tablero[posx][posy]="*";
    }
}

//Funcion para contar las bombas dentro del tablero
function contarBombas(i,j,fini,finj,tablero){
    for(var x=i;x<=fini;x++){
        for(var y=j;y<=finj;y++){
            if(tablero[x][y]!="*"){
                tablero[x][y] = (parseInt(tablero[x][y]) + 1);
            }
        }
    }    
}

//Bombas alrededor de una celda
function minas(contarBombas,tablero){
    for(var i=0;i<tablero.length;i++){
        for(var j=0;j<columnas;j++){
            if(tablero[i][j] == "*"){//Se evalua si el valor que hay en esa celda del tablero es una mina
                if(i == 0 && j==0){ //Esquina superior izquierda del tablero
                    contarBombas(i,j,i+1,j+1,tablero); 
                }
                if(i==0 && (j>0 && j<columnas)){//Borde superior del tablero sin incluir las esquinas
                    contarBombas(i,j-1,i+1,j+1,tablero);
                }
                if(i == 0 && j==columnas){//Esquina superior derecha del tablero
                    contarBombas(i,j-1,i+1,j,tablero);
                }
                if((i>0 && i<(tablero.length-1)) && j==columnas){//Borde derecho del tablero sin incluir las esquinas
                    contarBombas(i-1,j-1,i+1,j,tablero);
                }
                if(i == (tablero.length-1) && j==columnas){//Esquina inferior derecha del tablero
                    contarBombas(i-1,j-1,i,j,tablero);
                }
                if(i==(tablero.length-1) && (j>0 && j<columnas)){//Borde inferior del tablero sin incluir las esquinas
                    contarBombas(i-1,j-1,i,j+1,tablero);
                }
                if(i == (tablero.length-1) && j==0){//Esquina inferior izquierda del tablero
                    contarBombas(i-1,j,i,j+1,tablero);
                }
                if((i>0 && i<(tablero.length-1)) && j==0){//Borde izquierdo del tablero sin incluir las esquinas
                    contarBombas(i-1,j,i+1,j+1,tablero);
                }
                else if(i>0 && i<(tablero.length-1) && j>0 && j<columnas-1) {//Centro del tablero
                    contarBombas(i-1,j-1,i+1,j+1,tablero);
                }

            }
        }
    }
}

function validarCampo(tablero,f,c){
    for(var i=f;i<tablero.length;i++){
        for(var j=c;j<columnas;j++){
            if(tablero[i][j]=="*"){
                alert("Perdiste");
                break;
            }
            else{

            }
        }
    }
}
/*
for(var i=0;i<tablero.length;i++){
    for(var j=0;j<columnas;j++){
        if(tablero[i][j]==" "){
            tablero[i][j]=0;
        }
        if(j<columnas)
        document.write(tablero[i][j]);
        document.write(" ");
    }
    if(j==columnas)
        document.write("<br />");
}

console.log(tablero);

        
*/

