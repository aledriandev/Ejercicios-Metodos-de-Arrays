var assert=require("assert");

function ejercicio1(arr,num){
  var multiplica=0;
  if(Array.isArray(arr)){
    multiplica=arr.reduce(function(total,actual){
      return total*actual
    });
  }else if(!isNaN(arr)){
    multiplica=arr;
  }
  if(!isNaN(num)){
    multiplica*=num;
  }
  return multiplica;
}

function ejercicio2(arrNumeros,filtro){
  var arrayNew=[];
  var filtrado=[];

  filtrado= arrNumeros.filter(function(numero){
    numero = numero.toString();
    filtro=filtro.toString();
    var iniciales = numero.substr(0,filtro.length);
    var finales = numero.substr(-filtro.length);
    return (iniciales == filtro || finales == filtro);
  });
  return filtrado;
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

function ejercicio7(edades){
  
  return edades.filter(function(edad){
    return edad >= 18 && edad%2==0}).map(function(edad){
    return 2017-edad;
  });
}


 describe('Ejercicios de Metodos de Arrays', function(){

   describe('Ejercicio 1', function(){
     it('Prueba de [2,3,4] y 5', function(){
       assert.equal(120, ejercicio1([2,3,4], 5));
     });
     it('Prueba de [2,3,4] y "hola"', function(){
       assert.equal(24, ejercicio1([2,3,4], "hola"));
     });
     it('Prueba de [2,3,4] y nada', function(){
       assert.equal(24, ejercicio1([2,3,4]));
     });
     it('Prueba de 2 y 3', function(){
       assert.equal(6, ejercicio1(2,3));
     });
     it('Prueba de 2, 3 y 4', function(){
       assert.equal(6, ejercicio1(2,3,4));
     });

   });
   describe('Ejercicio 2', function(){
      it("cuando es [999999207, 207999999, 999999999] y el numero 207", function(){
        assert.deepEqual([999999207, 207999999], ejercicio2([999999207, 207999999, 999999999], 207));
      });
      it("cuando es [99999999207, 20799999, 99999999] y el numero 207", function(){
        assert.deepEqual([99999999207, 20799999], ejercicio2([99999999207, 20799999, 99999999], 207));
      });
      it("cuando es [99999999207, 20799999, 99999999] y el numero 2079", function(){
        assert.deepEqual([20799999], ejercicio2([99999999207, 20799999, 99999999], 2079));
      });
    });
   describe('Ejercicio 3', function(){
      it("cuando es [2,3,15,9] y el numero 3", function(){
        assert.deepEqual([3,15,9], ejercicio3([2,3,15,9], 3));
      });
    });
   describe('Ejercicio 4', function(){
      it("cuando es [2,3,4]", function(){
        assert.deepEqual([5,7,9], ejercicio4([2,3,4]));
      });
    });
   describe('Ejercicio 5', function(){
      it("cuando es [30,15] ", function(){
        assert.deepEqual([86,59], ejercicio5([30,15]));
      });
    });
   describe('Ejercicio 6', function(){
      it("cuando es [2,3]", function(){
        assert.equal(6, ejercicio6([2,3]));
      });
    });
   describe('Ejercicio 7', function(){
      it("cuando es [20,23,51,9] y el numero 3", function(){
        assert.deepEqual([1997], ejercicio7([20,23,51,9]));
      });
    });

  });  
 
