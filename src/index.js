/* var for colors  logo */
const onedarkTheme = ["#E06C75", "#F3C848", "#C678DD", "#56B6C2", "#98C379"];
const azureTheme = ["#ABD4F2", "#3F96C7", "#478BC9", "#464646", "#8F8F8F"];
const draculaTheme = ["#8AFF80", "#FF80BF", "#80FFEA", "#FFFF80", "#9580FF"];
const ayuTheme = ["#39BAE6", "#FFB454", "#AAD94C", "#F07178", "#D2A6FF"];
const monokaiTheme = ["#FD971F", "#A6E22E", "#F92672", "#E6DB74", "#AE81FF"];
const cobaltTheme = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
/* var for colors css */
// [0]: --bgfont, [1]: --letter, [2]: --lettertext, [3]: --check, [4]: --error
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

// You do not have internet uncomment these lines of code and comment the line of code number 441 (function initApp), Change the text of the variable textVar, Don't use the reset button if you don't have internet.

// textoVar =
//   "Any text to type. 777 777 111 111 111 111 717171 111777 777111 222777 222 222111 8822 888 888222 33339939 99 99 3393 9933 9933 4444 04 04 000 44 004 000 444 5656 55 66 55 66 55 66 55 66 1289 23432189 789431246 91 4893175761 ";
// myArr = textoVar.split(" ");
// temp = myArr.length;
// $textFollow.textContent = textoVar;

// logic typing
$inputWrite.addEventListener("keydown", (e) => {
  let valueChange = $inputWrite.value;
  if ($inputWrite.value == myArr[0].slice(0, valueChange.length)) {
    $inputWrite.style.color = "var(--check)";
  } else {
    $inputWrite.style.color = "var(--error)";
  }
  if ($inputWrite.value == myArr[0]) {
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
      // first option or if no only coment, line code 97, 98, ... , 107.
      let randomNumberOne = Math.random() * 255;
      let randomNumberTwo = Math.random() * 255;
      let randomNumberThree = Math.random() * 255;

      let randomNumberOneI = Math.random() * 255;
      let randomNumberTwoI = Math.random() * 255;
      let randomNumberThreeI = Math.random() * 255;
      hardModeTwo(
        `rgb(${randomNumberOne}, ${randomNumberTwo}, ${randomNumberThree})`,
        `rgb(${randomNumberOneI}, ${randomNumberTwoI}, ${randomNumberThreeI})`
      );
      // second option
      // if (count < 200) {
      //   hardModeTwo("red", "yellow");
      // } else if (count > 200 && count < 400) {
      //   hardModeTwo("orange", "pink");
      // } else if (count > 400 && count < 600) {
      //   hardModeTwo("brown", "black");
      // } else if (count > 600 && count < 800) {
      //   hardModeTwo("blue", "purple");
      // } else if (count > 800 && count < 1000) {
      //   hardModeTwo("skyblue", "aquamarine");
      // } else if (count > 1000 && count < 1200) {
      //   hardModeTwo("cadetblue", "cornflowerblue");
      // } else if (count > 1200 && count < 1400) {
      //   hardModeTwo("aqua", "midnightblue");
      // } else if (count > 1400 && count < 1600) {
      //   hardModeTwo("gray", "pink");
      // } else if (count > 1600 && count < 1800) {
      //   hardModeTwo("white", "yellow");
      // } else if (count > 1800 && count < 2000) {
      //   hardModeTwo("orange", "red");
      // } else if (count > 2000 && count < 2200) {
      //   hardModeTwo("black", "red");
      // } else {
      //   hardModeTwo("black", "white");
      // }
    }, 5000);
  }
  countKey++;
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
// Get information (the texts) from the data.json file
async function getText() {
  try {
    let url = "../data/data.json";
    let res = await fetch(url);
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let dataLength = 10;
    let aNum = parseInt(Math.random() * dataLength);
    //Random texts, in the data.json file I only have 10 texts, so the "dataLength" variable must be initialized with the number 10. If we want to add 50 texts then we initialize the "dataLength" variable with the number 50.
    textoVar = json[aNum].text;
    myArr = textoVar.split(" ");
    temp = myArr.length;
    $textFollow.textContent = textoVar;
  } catch (err) {
    $textFollow.textContent = `${err.status} ERROR`;
  }
}
// Calculate words per minute
function calcppm() {
  if (temp && timer) {
    let numa;
    if (second <= 60) {
      numa = (second * 1) / 60;
    } else if (second <= 120) {
      numa = (second * 2) / 120;
    } else if (second <= 180) {
      numa = (second * 3) / 180;
    } else if (second <= 240) {
      numa = (second * 4) / 240;
    } else {
      numa = (second * 5) / 300;
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
  $inputWrite.value = "";
  getStorage();
});
// function localStorage
function getStorage() {
  if (localStorage.getItem(fontSize)) {
    changeSize(localStorage.getItem(fontSize));
    $letterSizeShow.textContent = localStorage.getItem(fontSize);
  }

  if (localStorage.getItem(colorSelect)) {
    colorSettings(localStorage.getItem(colorSelect));
  }

  if (localStorage.getItem(fontFamily)) {
    s.setProperty("--fontmono", localStorage.getItem(fontFamily));
  }
}
// functions settings
// function font family
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
// function to change the theme of the application
function colorSettings(arg) {
  if (arg.length !== undefined) {
    if (arg === "azure") {
      changePar(azureTheme, azureThemeCss);
    } else if (arg === "ayu") {
      changePar(ayuTheme, ayuThemeCss);
    } else if (arg === "dracula") {
      changePar(draculaTheme, draculaThemeCss);
    } else if (arg === "monokai") {
      changePar(monokaiTheme, monokaiThemeCss);
    } else if (arg === "onedark") {
      changePar(onedarkTheme, onedarkThemeCss);
    } else if (arg === "cobalt") {
      changePar(cobaltTheme, cobaltThemeCss);
      expMode = true;
    } else return;
  } else {
    if (arg.target.value === "azure") {
      changePar(azureTheme, azureThemeCss);
      if (localStorage.getItem(colorSelect) === "cobalt") {
        localStorage.setItem(colorSelect, "azure");
        location.reload();
      } else {
        localStorage.setItem(colorSelect, "azure");
      }
    } else if (arg.target.value === "ayu") {
      changePar(ayuTheme, ayuThemeCss);
      if (localStorage.getItem(colorSelect) === "cobalt") {
        localStorage.setItem(colorSelect, "ayu");
        location.reload();
      } else {
        localStorage.setItem(colorSelect, "ayu");
      }
    } else if (arg.target.value === "dracula") {
      changePar(draculaTheme, draculaThemeCss);
      if (localStorage.getItem(colorSelect) === "cobalt") {
        localStorage.setItem(colorSelect, "dracula");
        location.reload();
      } else {
        localStorage.setItem(colorSelect, "dracula");
      }
    } else if (arg.target.value === "monokai") {
      changePar(monokaiTheme, monokaiThemeCss);
      if (localStorage.getItem(colorSelect) === "cobalt") {
        localStorage.setItem(colorSelect, "monokai");
        location.reload();
      } else {
        localStorage.setItem(colorSelect, "monokai");
      }
    } else if (arg.target.value === "onedark") {
      changePar(onedarkTheme, onedarkThemeCss);
      if (localStorage.getItem(colorSelect) === "cobalt") {
        localStorage.setItem(colorSelect, "onedark");
        location.reload();
      } else {
        localStorage.setItem(colorSelect, "onedark");
      }
    } else if (arg.target.value === "cobalt") {
      changePar(cobaltTheme, cobaltThemeCss);
      localStorage.setItem(colorSelect, "cobalt");
      expMode = true;
      countKey = 0;
    } else return;
  }
}

// function to change font size
function changeSize(arg) {
  let varTemp;
  if (arg.length === undefined) {
    varTemp = arg.target.value;
  } else {
    varTemp = localStorage.getItem(fontSize);
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

// functions for color
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
/* Key ESC */
function shortcuts(e) {
  if (e.key === "Escape") {
    $customModal.style.opacity = 1;
    $customModal.style.visibility = "visible";
  }
}
// Button reset
$buttonReset.addEventListener("click", (e) => {
  initApp();
});
// Change cobalt theme color
function hardMode(url, url2) {
  s.setProperty("--bgfont", "transparent");
  if (count % 2 !== 0) {
    html.style.backgroundImage = `url("${url}")`;
  } else {
    html.style.backgroundImage = `url("${url2}")`;
  }
}
function hardModeTwo(color1, color2) {
  html.style.backgroundImage = `none`;
  if (count % 2 !== 0) {
    s.setProperty("--bgfont", `${color1}`);
  } else {
    s.setProperty("--bgfont", `${color2}`);
  }
}

// Reset the entire app to defaults
function initApp() {
  getText();
  clearInterval(timer);
  timer = false;
  second = 0;
  $inputWrite.removeAttribute("disabled");
  $inputWrite.value = "";
  $inputWrite.focus();
  if (localStorage.getItem(fontSize)) {
    $letterSizeShow.textContent = localStorage.getItem(fontSize);
  } else {
    $letterSizeShow.textContent = "10";
  }
}

// Init app
initApp();
