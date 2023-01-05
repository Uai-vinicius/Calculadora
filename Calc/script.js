function insert(entrada) {

   var numero= document.getElementById('visor').innerHTML ;
   document.getElementById('visor').innerHTML = numero+entrada;
};
 function clean(){

     document.getElementById('visor').innerHTML=('');
 };
 function back() {

     var every = document.getElementById('visor').innerHTML;
     document.getElementById('visor').innerHTML = every.substring(0,every.length -1);

 };

function calcular() {

    var every= document.getElementById('visor').innerHTML;
    if(every){

        document.getElementById('visor').innerHTML= eval(every);

    }else{

            document.getElementById('visor').innerHTML="digite..."

        }

    };
