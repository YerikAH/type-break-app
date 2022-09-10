const $textFollow = document.getElementById("textFollow");
const $inputWrite = document.getElementById("inputWrite");
const $count = document.getElementById("count");
let randomNumber = parseInt(Math.random() * 10);
console.log(randomNumber);
let textoVar = [
  "Eres un hombre, y no le importas a nadie. Puede que ya te hayas dado cuenta. Nadie va a venir a entregarte la vida con la que sueñas.Sé que a veces tienes miedo y anhelas volver a tiempos más fáciles. Pero también sé que en ti hay un impulso por mejorar.Tú y yo estamos forjados por las mismas hormonas. Las que nos llaman a transformar nuestro entorno, transformar el mundo. Luchar por lo que creemos",
  "El diseño atemporal es aquel diseño que perdura en el tiempo, desde mi punto de vista es importante porque te ayuda a mantener una marca, o dar a conocer algo con el paso de los años sin perder la identidad. Por eso la importancia de conceptualizar de forma correcta, en este caso por ejemplo un logo, para que por más tendencias que hayan, por más software que salgan, siga manteniéndose intacto y comunicando para lo que fue creado.",
  "El color en sí mismo no es ni frío ni caliente, ni saturado ni poco saturado, no es brillante ni oscuro. El color en sí mismo solo tiene valor cuando esta rodeado de otro. Cuando hablamos de color, estamos hablando de luz rebotando en un objeto y que llega a nuestros ojos para darnos la perspectiva visual",
  "Esto es un pequeño texto que solo es de relleno, no es nada, solo son palabras puestas al azar porque es un texto relleno no sirve de nada no hay valor en su lectura, no digo que estás perdiendo tu tiempo, solo digo que es texto no tiene valor en sí mismo. Pero tú estás leyendo esto.",
  "Es un concepto un poco complejo de explicar esto solo sucede con objetos, no pasara nada si es solo un valor primitivo. Cuando usas .map en objetos podes recorrer un cierto objeto o hasta puedes crear un objeto, pero cuando agregas un nuevo objeto  surge un problema.",
  "Cuando analizamos y comparamos diferentes sitios de competidores que están intentando resolver el mismo problema que nosotros",
  "Para esto eso no sé qué es esto ahora, pero si ella no hace ningún movimiento ahora estas eso esa no estoy perdida porque si estaría perdido, no hace nada porque ahora movimiento ahora texto texto texto ahora ahora ahora.",
  "Cuando creamos y accedemos desde JavaScript a HTML cuesto mucho a la aplicación volviéndola un poco más lenta. Pero si haces un cambio de JavaScript estando en JavaScript esto no afectara mucho. Lo que hace Vue.js es hacer una copia del DOM. Es decir, todo ya está hecho y no habrá cambios bruscos.",
  "PostgresSQL es un motor de base de datos dicen que es son la base de datos más poderosa del mundo, Open source, objeto relacion que sea como POO, usa SQL, desde 1986,PotGIS, PgSQLm Cumple ACID.",
  "Lo real es lógico pero su lógica es ilógica así también lo ilógico tiene lógica le das una lógica cuando lo defines. Eso es raro, todo es raro, no puedo decir nada, mi pasado, mi futuro. ¿Quién soy? esa pregunta entro cuando no tenía amigos, cuando estaba completamente solo no tenía a nadie, perdí el yo externo que fue definido por los demás y no por mí mismo.",
];
let choiceText = textoVar[randomNumber];
$textFollow.textContent = choiceText;
let myArr = choiceText.split(" ");
let condition = false;
let i = 0;

$inputWrite.addEventListener("keydown", (e) => {
  let valueChange = $inputWrite.value;
  if ($inputWrite.value == myArr[0].slice(0, valueChange.length)) {
    $inputWrite.style.color = "blue";
  } else {
    $inputWrite.style.color = "red";
  }
  if ($inputWrite.value == myArr[0]) {
    console.log("ok");
    condition = true;
    if (e.key == " ") {
      myArr.shift();
      let otherArr = myArr.join(" ");
      $textFollow.textContent = otherArr;
    }
  } else {
    condition = false;
  }
});
$inputWrite.addEventListener("keyup", (e) => {
  if (condition && e.key == " ") {
    $inputWrite.value = "";
    if (myArr.length == 0) {
      $inputWrite.value = "GANASTE!!!";
      $inputWrite.setAttribute("disabled", "true");
    }
  }
});
