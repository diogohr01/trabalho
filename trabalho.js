function loopDePares(num){

    for( let i = 0;  i  <= 100; i++){
      console.log(i)
      if((num + i) % 2 == 0){
        console.log( 'O número', i,'é par')
      }
    } 
}

console.log(loopDePares(100))

//Questão 2

function loopDeImpares(numero, palavra){
    for( let i = 0;  i  <= 100; i++){
      console.log(i)
      if((numero + i) % 2 != 0){
        console.log(palavra)
      }
    } 
  }

  console.log(loopDeImpares(1,'banana'))

//Questão 03

function soma(num){
    let somador = 0;
    for(let i = 0; i<=num; i++){
      somador += i;
    }
    return somador
  }
console.log(soma(100));

//Questão 04

function newArray(num){
    let lista = [];
    for(let i = 1; i<=num; i++){
      lista.push(i);
    }
    return lista
  }

  console.log(newArray(10));

//Questão 05

function split(palavra){
    lista = [];
    for(let i = 0; i < palavra.length; i++){
      lista.push(palavra[i]);
    }
    return lista
  }
  
console.log(split('olá'))