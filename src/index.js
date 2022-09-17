/* var for colors */
const onedarkTheme = ["#E06C75", "#F3C848", "#C678DD", "#56B6C2", "#98C379"];
const azureTheme = ["#ABD4F2", "#3F96C7", "#478BC9", "#464646", "#8F8F8F"];
const draculaTheme = ["#8AFF80", "#FF80BF", "#80FFEA", "#FFFF80", "#9580FF"];
const ayuTheme = ["#39BAE6", "#FFB454", "#AAD94C", "#F07178", "#D2A6FF"];
const monokaiTheme = ["#FD971F", "#A6E22E", "#F92672", "#E6DB74", "#AE81FF"];
const cobaltTheme = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
/* var for colors css */
const onedarkThemeCss = ["#282C34", "#F3F7FF", "#5C6370", "#ABB2BF", "#E06C75"];
const azureThemeCss = ["#121212", "#dbe3e3", "#5c5c5c", "#478bc9", "#ae515e"];
const draculaThemeCss = ["#22212C", "#FFFFFF", "#5E5C75", "#9580FF", "#FF80BF"];
const ayuThemeCss = ["#0D1017", "#dbe3e3", "#373E4A", "#E6B450", "#D95757"];
const monokaiThemeCss = ["#272822", "#dbe3e3", "#515344", "#FD971F", "#F92672"];
const cobaltThemeCss = ["#000000", "#FFFFFF", "#FFFFFF", "#F00", "#481212"];

/* Input */
const html = document.querySelector("html");
const $textFollow = document.getElementById("textFollow");
const $inputWrite = document.getElementById("inputWrite");
/* Open modal */
const $customApp = document.getElementById("customApp");
const $customModal = document.getElementById("customModal");
const $closeModalCustom = document.getElementById("closeModalCustom");
/* style select */
const s = document.documentElement.style;
/* logo select*/
const $colorOne = document.getElementById("colorOne");
const $colorTwo = document.getElementById("colorTwo");
const $colorThree = document.getElementById("colorThree");
const $colorFour = document.getElementById("colorFour");
const $colorFive = document.getElementById("colorFive");
/* input range font size */
const $letterSize = document.getElementById("letterSize");
const $letterSizeShow = document.getElementById("letterSizeShow");
/* button reset */
const $buttonReset = document.getElementById("buttonReset");
let fontFamily = "font";
let colorSelect = "theme";
let fontSize = "sizefont";
let textoVar;
let myArr;
let condition = false;
let i = 0;
let second = 0;
let timer;
let temp;
let expMode = false;
let countKey = 0;
let count = 0;
let epile;
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
    timer = setInterval(() => {
      second++;
      console.log(second);
    }, 1000);
  }

  if (condition && e.key == " ") {
    $inputWrite.value = "";
    if (myArr.length == 0) {
      clearInterval(timer);
      calcppm();
      $inputWrite.setAttribute("disabled", "true");
    }
  }
  if (expMode && countKey == 5) {
    countKey = 0;
    epile = setInterval(() => {
      count++;
      if (count < 50) {
        if (count % 2 !== 0) {
          s.setProperty("--bgfont", "black");
        } else {
          s.setProperty("--bgfont", "red");
        }
      } else if (count > 50) {
        if (count % 2 !== 0) {
          s.setProperty("--bgfont", "white");
        } else {
          s.setProperty("--bgfont", "red");
        }
      } else if (count > 150) {
      }
    }, 1000);
  }
  countKey++;
  console.log(countKey);
  shortcuts(e);
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
  let valueChange = $inputWrite.value;
  if ($inputWrite.value == myArr[0].slice(0, valueChange.length)) {
    $inputWrite.style.color = "var(--check)";
  } else {
    $inputWrite.style.color = "var(--error)";
  }
});
async function getText() {
  try {
    let url = "../data/data.json";
    let res = await fetch(url);
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let aNum = parseInt(Math.random() * 10);
    textoVar = json[aNum].text;
    myArr = textoVar.split(" ");
    temp = myArr.length;
    $textFollow.textContent = textoVar;
  } catch (err) {
    console.log(err);
    $textFollow.textContent = `${err.status} ERROR`;
  }
}
function calcppm() {
  if (temp && timer) {
    let numa;
    if (second <= 60) {
      numa = (second * 1) / 60;
      console.log("60");
    } else if (second <= 120) {
      numa = (second * 2) / 120;
      console.log("120");
    } else if (second <= 180) {
      numa = (second * 3) / 180;
      console.log("180");
    } else if (second <= 240) {
      numa = (second * 4) / 240;
      console.log("240");
    } else {
      numa = (second * 5) / 300;
      console.log("300");
    }
    let rst = Math.ceil(temp / numa);
    $inputWrite.value = `${rst} W.P.M`;
  }
}
/* Modal */
$customApp.addEventListener("click", (e) => {
  $customModal.style.opacity = 1;
  $customModal.style.visibility = "visible";
});
$closeModalCustom.addEventListener("click", (e) => {
  $customModal.style.opacity = 0;
  $customModal.style.visibility = "hidden";
});
/* Settings */
/* Font settings */
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    fontSettings(e);
    colorSettings(e);
  }
  if (e.target.type === "range") {
    changeSize(e);
  }
});
/* get localstorage */
document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem(fontFamily)) {
    s.setProperty("--fontmono", localStorage.getItem(fontFamily));
  } else return;

  if (localStorage.getItem(colorSelect)) {
    colorSettings(localStorage.getItem(colorSelect));
  } else return;

  if (localStorage.getItem(fontSize)) {
    changeSize(localStorage.getItem(fontSize));
  } else return;
  $inputWrite.value = "";
});

/* functions settings */
function fontSettings(e) {
  if (e.target.value === "overpass") {
    s.setProperty("--fontmono", "Overpass Mono");
    localStorage.setItem(fontFamily, "Overpass Mono");
  } else if (e.target.value === "fira") {
    s.setProperty("--fontmono", "Fira Code");
    localStorage.setItem(fontFamily, "Fira Code");
  } else if (e.target.value === "ptmono") {
    s.setProperty("--fontmono", "PT Mono");
    localStorage.setItem(fontFamily, "PT Mono");
  } else if (e.target.value === "jetbrains") {
    s.setProperty("--fontmono", "JetBrains Mono");
    localStorage.setItem(fontFamily, "JetBrains Mono");
  } else if (e.target.value === "space") {
    s.setProperty("--fontmono", "Space Mono");
    localStorage.setItem(fontFamily, "Space Mono");
  } else if (e.target.value === "share") {
    s.setProperty("--fontmono", "Share Tech Mono");
    localStorage.setItem(fontFamily, "Share Tech Mono");
  } else return;
}
function colorSettings(arg) {
  if (arg.length !== undefined) {
    if (arg === "azure") {
      changePar(azureTheme, azureThemeCss);
      expMode = false;
    } else if (arg === "ayu") {
      changePar(ayuTheme, ayuThemeCss);
      expMode = false;
    } else if (arg === "dracula") {
      changePar(draculaTheme, draculaThemeCss);
      expMode = false;
    } else if (arg === "monokai") {
      changePar(monokaiTheme, monokaiThemeCss);
      expMode = false;
    } else if (arg === "onedark") {
      changePar(onedarkTheme, onedarkThemeCss);
      expMode = false;
    } else if (arg === "cobalt") {
      changePar(cobaltTheme, cobaltThemeCss);
      expMode = true;
    } else return;
  } else {
    if (arg.target.value === "azure") {
      changePar(azureTheme, azureThemeCss);
      localStorage.setItem(colorSelect, "azure");
      expMode = false;
      location.reload();
    } else if (arg.target.value === "ayu") {
      changePar(ayuTheme, ayuThemeCss);
      localStorage.setItem(colorSelect, "ayu");
      expMode = false;
      location.reload();
    } else if (arg.target.value === "dracula") {
      changePar(draculaTheme, draculaThemeCss);
      localStorage.setItem(colorSelect, "dracula");
      expMode = false;
      location.reload();
    } else if (arg.target.value === "monokai") {
      changePar(monokaiTheme, monokaiThemeCss);
      localStorage.setItem(colorSelect, "monokai");
      expMode = false;
      location.reload();
    } else if (arg.target.value === "onedark") {
      changePar(onedarkTheme, onedarkThemeCss);
      localStorage.setItem(colorSelect, "onedark");
      expMode = false;
      location.reload();
    } else if (arg.target.value === "cobalt") {
      changePar(cobaltTheme, cobaltThemeCss);
      localStorage.setItem(colorSelect, "cobalt");
      expMode = true;
      countKey = 0;
    } else return;
  }
}
function changeSize(arg) {
  let varTemp;
  if (arg.length === undefined) {
    varTemp = arg.target.value;
  } else {
    varTemp = localStorage.getItem(fontSize);
    console.log(localStorage.getItem(fontSize));
  }
  $letterSizeShow.textContent = varTemp;
  switch (varTemp) {
    case "1":
      s.setProperty("--size", "calc(0.3rem + 1.5vw)");
      localStorage.setItem(fontSize, "1");
      break;
    case "2":
      s.setProperty("--size", "calc(0.4rem + 1.5vw)");
      localStorage.setItem(fontSize, "2");
      break;
    case "3":
      s.setProperty("--size", "calc(0.5rem + 1.5vw)");
      localStorage.setItem(fontSize, "3");
      break;
    case "4":
      s.setProperty("--size", "calc(0.6rem + 1.5vw)");
      localStorage.setItem(fontSize, "4");
      break;
    case "5":
      s.setProperty("--size", "calc(0.7rem + 1.5vw)");
      localStorage.setItem(fontSize, "5");
      break;
    case "6":
      s.setProperty("--size", "calc(0.8rem + 1.5vw)");
      localStorage.setItem(fontSize, "6");
      break;
    case "7":
      s.setProperty("--size", "calc(0.9rem + 1.5vw)");
      localStorage.setItem(fontSize, "7");
      break;
    case "8":
      s.setProperty("--size", "calc(1rem + 1.5vw)");
      localStorage.setItem(fontSize, "8");
      break;
    case "9":
      s.setProperty("--size", "calc(1.2rem + 1.5vw)");
      localStorage.setItem(fontSize, "9");
      break;
    case "10":
      s.setProperty("--size", "calc(1.5rem + 1.5vw)");
      localStorage.setItem(fontSize, "10");
      break;
    default:
      break;
  }
}

/* functions for color */
function colorConfig(a, b, c, d, e) {
  $colorOne.style.fill = a;
  $colorTwo.style.fill = b;
  $colorThree.style.fill = c;
  $colorFour.style.fill = d;
  $colorFive.style.fill = e;
}
function changeColorVarCss(bgfont, letter, lettertext, check, error) {
  s.setProperty("--bgfont", bgfont);
  s.setProperty("--letter", letter);
  s.setProperty("--lettertext", lettertext);
  s.setProperty("--check", check);
  s.setProperty("--error", error);
}
function changePar(x, y) {
  colorConfig(x[0], x[1], x[2], x[3], x[4]);
  changeColorVarCss(y[0], y[1], y[2], y[3], y[4]);
}
/* shotcuts */
function shortcuts(e) {
  if (e.key === "Escape") {
    $customModal.style.opacity = 1;
    $customModal.style.visibility = "visible";
  }
}
$buttonReset.addEventListener("click", (e) => {
  initApp();
});
function initApp() {
  getText();
  clearInterval(timer);
  timer = false;
  second = 0;
  $inputWrite.removeAttribute("disabled");
  $inputWrite.value = "";
  $inputWrite.focus();
}

/* Init app */

initApp();
