const pessoa = [
   {
    altura: 1.78,
    sexo: "M"
   },
   {
    altura: 1.55,
    sexo: "M"
   },
   {
    altura: 1.48,
    sexo:"M"
   },
   {
    altura: 1.72,
    sexo: "M"
   },
   {
    altura: 1.83,
    sexo: "F"
   },
   {
    altura: 1.65,
    sexo:"F"
   },
   {
    altura: 1.74,
    sexo: "M"
   },
   {
    altura: 1.68,
    sexo:"F"
   },
   {
    altura: 1.77,
    sexo: "M"
   },
   {
    altura: 1.59,
    sexo:"F"
   },
   {
    altura: 1.81,
    sexo: "M"
   },
   {
    altura: 1.87,
    sexo: "M"
   },
   {
    altura: 1.55,
    sexo: "F"
   },
   {
    altura: 1.60,
    sexo: "M"
   },
   {
    altura: 1.66,
    sexo: "F"
   }
];



const min = pessoa.reduce(function(a,b){
    return a.altura < b.altura ? a : b
});
 console.log (min)

const max = pessoa.reduce(function(a,b){
    return a.altura > b.altura ? a : b
});
 console.log (max);


let alturaMulheres = 0;
let contador = 0;
 const mulheres = pessoa.filter(function(p){
 if(p.sexo === "F"){
    alturaMulheres += p.altura;
    contador++;}
});
 console.log(alturaMulheres/contador);

const homens = pessoa.filter(pessoa => pessoa.sexo === "M").length
 console.log(homens);


 




