var assert=require("assert");

function ejercicio1(arr,num){
  var multiplica=0;
  if(Array.isArray(arr)){
    multiplica= arr.reduce(function(total,actual){
      return total*actual
    });
  }else if(!isNaN(arr)){
    multiplica = arr;
  }
  if(!isNaN(num)){
    multiplica*=num;
  }
  return multiplica;
}

function ejercicio2(arrNumeros,filtro){
  return arrNumeros.filter(function(numero){
    numero = numero.toString();
    filtro=filtro.toString();
    var iniciales = numero.substr(0,filtro.length);
    var finales = numero.substr(-filtro.length);
    return (iniciales == filtro || finales == filtro);
  });
}

function ejercicio3(arrNumeros,numero){
  var arrMultiplo=[];
  arrNumeros.forEach(function(num){
    if (num%numero==0){
      arrMultiplo.push(num);
    } 
  });
  return arrMultiplo;
}

function ejercicio4(numeros){
  return numeros.map(function(num){return num*2}).map(function(num){return num+1});
}

function ejercicio5(celcius){
  return celcius.map(function(grados){return grados*9/5+32});
}

function ejercicio6(arr){
  return arr.reduce((a,b) => a*b);
}

function ejercicio7a(edades){
  
  return edades.filter(function(edad){
    return edad >= 18 && edad%2==0}).map(function(edad){
    return 2017-edad;
  });
}


 describe('Ejercicios de Metodos de Arrays', function(){

   describe('Ejercicio 1', function(){
     it('Prueba de [2,3,4] y 5', function(){
       assert.equal(120, ejercicios.ejercicio1([2,3,4], 10));
     });
     it('Prueba de [2,3,4] y "hola"', function(){
       assert.equal(24, ejercicios.ejercicio1([2,3,4], "hola"));
     });
     it('Prueba de [2,3,4] y nada', function(){
       assert.equal(24, ejercicios.ejercicio1([2,3,4]));
     });
     it('Prueba de 2 y 3', function(){
       assert.equal(6, ejercicios.ejercicio1(2,3));
     });
     it('Prueba de 2, 3 y 4', function(){
       assert.equal(6, ejercicios.ejercicio1(2,3,4));
     });
   });
 
  });