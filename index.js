let matriz=[[1,2,3],[4,5,6],[7,8,9]];

function matrizOriginal(matriz) {
    console.log("Matriz original");
    for(let i=0,j=0;i<3;i++){
        console.log(matriz[i][j],matriz[i][j+1],matriz[i][j+2]);        
    }
}

function salida1(matriz) {
    console.log("Salida 1");
    for(let i=2,j=2;i>=0;i--){
        console.log(matriz[i][j],matriz[i][j-1],matriz[i][j-2]);     
    }
}

function salida2(matriz) {
    console.log("Salida 2");
    for(let i=0,j=0;j<3;j++){
        console.log(matriz[i][j],matriz[i+1][j],matriz[i+2][j]);     
    }
}

function salida3(matriz) {
    console.log("Salida 3");
    for(let i=2,j=2;j>=0;j--){
        console.log(matriz[i][j],matriz[i-1][j],matriz[i-2][j]);     
    }
}
matrizOriginal(matriz);
salida1(matriz);
salida2(matriz);
salida3(matriz);
