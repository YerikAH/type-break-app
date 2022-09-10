const $textFollow = document.getElementById("textFollow");
const $inputWrite = document.getElementById("inputWrite");
const $count = document.getElementById("count");
const $customApp = document.getElementById("customApp");
let textoVar;
let myArr;
let condition = false;
let i = 0;
let second = 0;
let timer;
let temp;
$inputWrite.addEventListener("keydown", (e) => {
  let valueChange = $inputWrite.value;
  if ($inputWrite.value == myArr[0].slice(0, valueChange.length)) {
    $inputWrite.style.color = "var(--check)";
  } else {
    $inputWrite.style.color = "var(--error)";
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
  if (!timer) {
    timer = setInterval(() => second++, 1000);
  }
});
$inputWrite.addEventListener("keyup", (e) => {
  if (condition && e.key == " ") {
    $inputWrite.value = "";
    if (myArr.length == 0) {
      clearInterval(timer);
      calcppm();
      $inputWrite.setAttribute("disabled", "true");
    }
  }
});
$customApp.addEventListener("click", (e) => {});

async function getText() {
  try {
    let res = await fetch("../data/data.json");
    let json = await res.json();
    let aNum = parseInt(Math.random() * 10);
    textoVar = json[aNum].text;
    myArr = textoVar.split(" ");
    temp = myArr.length;
    $textFollow.textContent = textoVar;
    return textComplete;
  } catch (error) {}
}
getText();
function calcppm() {
  if (temp && timer) {
    let numa;
    if (timer <= 60) {
      numa = (timer * 1) / 60;
    } else if (timer <= 120) {
      numa = (timer * 2) / 120;
    } else if (timer <= 180) {
      numa = (timer * 3) / 180;
    } else if (timer <= 240) {
      numa = (timer * 4) / 240;
    } else {
      numa = (timer * 5) / 300;
    }
    let rst = Math.ceil(temp / numa);
    $inputWrite.value = `${rst} W.P.M`;
  }
}
