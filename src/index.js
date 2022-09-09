const $textFollow = document.getElementById("textFollow");
const $inputWrite = document.getElementById("inputWrite");
const $count = document.getElementById("count");
let textoVar =
  "Esto es un texto genial para personas geniales que quieren mejorar su ingles de una manera espectacularmente increible, espero que hagas esto pequeño mecanografo, espero eso sin embargo siempre hay cosas increibles.";
$textFollow.textContent = textoVar;
let myArr = textoVar.split(" ");
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
