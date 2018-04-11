var card = prompt ("Ingresa los numeros a evaluar");
var final = 0;
var arr = card.split('');
var reverseArr=arr.reverse();    //Declaramos las variables.
   console.log('este es el reverso: '+reverseArr);
var product=1;
var sum=0;
var newArr=[];

card.replace(/[^a-zA-Z0-9]/g,'_')
while(card == '' || card.replace(/[^a-z]/g, ' ' ) == card || card.length !== 16 || card.replace(/[^a-zA-Z0-9]/g,'_') == card){
  alert('Tu tarjeta debe tener 16 digitos y solo se admiten numeros'); //Validamos que el usuario no ingrese campos vacios ni letras.
  text = prompt ("Ingresa los numeros a evaluar");
}

function isValidCard(){ // iniciamos nuestra funcion llamada isValidCard.
  for(var i=0; i<reverseArr.length; i++){ //iteramos entre cada inice de nuestro array.
      if(i === 1 || i%2===1 ){
         product=reverseArr[i]*2; //en los elementos pares de nuestro array se multiplicara por 2
         if(product<10){
            newArr[i]=product; //y se agregara al nuevo array.
         }else{
           var result = 0;
            result=Math.floor(product/10)+(product%10);
            newArr[i]=result;
          }
      }
   }
  for(var i=0; i<reverseArr.length; i++){
      if(i === 0 || i%2===0 ){  //cada elemento impar de nuestro array se pasara tal cual al nuevo array
         newArr[i]=parseInt(reverseArr[i]);

      }
   }
  for(var i=0; i<newArr.length; i++){
      final = final + newArr [i]; //realizamos la suma total de los valores dentro de  nuestro array.
   }
  return final;
}
 isValidCard(card); //Llamamos a la funcion isValidCard
  alert("tu final es : " + final);
  if (final%10 === 0){ //Evaluamos la suma de valores, si es divisible entre 10 con residuo 0 correspondera a una tarjeta valida.
    alert("Tu tarjeta es valida \n Gracias por usar el programa");
}else {   // si nuestro residuo no es 0 sera una tarjeta invalida.
  alert("Tu tarjeta no es valida \n Gracias por usar el programa"); //agradecemos al usuario y terminamos el programa.
}
