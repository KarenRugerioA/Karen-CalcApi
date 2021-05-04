//KAREN RUGERIO A. 
//DECLARACIÓN DE VARIABLES
var x;
var y;

//FUNCIÓN SUMA CON APIS
function Suma() {
 var numuno = $('#numuno').val();
 var numdos = $('#numdos').val();
 var url ="http://localhost:8085/Suma/?x=" + numuno  + "&y=" + numdos;
 console.log('url');
 console.log(url);
 $.getJSON(url,
  function(json) {
    console.log(json);
	$('#resultado').html('<h1>' +json.suma + '</h1>');
	}
  );
}

//FUNCIÓN RESTA CON APIS
function Resta() {
  var numuno = $('#numuno').val();
  var numdos = $('#numdos').val();
  var url ="http://localhost:8085/Resta/?x=" + numuno  + "&y=" + numdos;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.resta + '</h1>');
   }
   );
 }

//FUNCIÓN MULTIPLICACIÓN CON APIS
function Multiplicacion() {
  var numuno = $('#numuno').val();
  var numdos = $('#numdos').val();
  var url ="http://localhost:8085/Multi/?x=" + numuno  + "&y=" + numdos;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.mult + '</h1>');
   }
   );
 }

//FUNCIÓN DIVISIÓN CON APIS
function Division() {
  var numuno = $('#numuno').val();
  var numdos = $('#numdos').val();
  var url ="http://localhost:8085/Division/?x=" + numuno  + "&y=" + numdos;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.div + '</h1>');
   }
   );
 }

//FUNCIÓN EXPONENTE CON APIS
function Exponencial() {
  var numuno = $('#numuno').val();
  var numdos = $('#numdos').val();
  var url ="http://localhost:8085/Pow/?x=" + numuno  + "&y=" + numdos;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }



