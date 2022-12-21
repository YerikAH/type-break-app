import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./logicStyle.css";

export default function LogicApp() {
  const [word, setWord] = useState([]);
  const [wordWrite, setWordWrite] = useState("");
  const [errorStyle, setErrorStyle] = useState({});
  const [changeLetters, setChangeLetters] = useState("wordFourLetters");
  const [corretWord, setCorretWord] = useState(0);
  const [incorretWord, setIncorretWord] = useState(0);

  /* render */
  const [startTest, setStartTest] = useState(false);
  const [testEnd, setTestEnd] = useState(true);

  /* Timer */
  const [timeCustomInput, setTimeCustomInput] = useState("");
  const [timeCustomInputError, setTimeCustomInputError] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerUi, setTimerUi] = useState(30);

  /* result wpm */
  const [wpmTotal, setWpmTotal] = useState("");

  async function getDataWord() {
    let url = "./src/data/easyEsp.json";
    try {
      let res = await fetch(url);
      let json = await res.json();
      if (!res.ok) {
        throw {
          resStatus: res.status,
          resStatusText: res.statusText,
        };
      }
      let saveJsonWord = [];
      for (let i = 0; i < 10000; i++) {
        const selectArrJsonWord = json[0][changeLetters];
        const numberRandom = Math.floor(
          Math.random() * selectArrJsonWord.length
        );
        const getContentJsonWork = selectArrJsonWord[numberRandom];

        saveJsonWord.push(getContentJsonWork);
      }
      setWord(saveJsonWord);
    } catch (err) {}
  }

  const handleChange = (e) => {
    const textWrite = e.target.value;
    const wordMoreSpace = `${word[0]} `;
    setWordWrite(textWrite);
    if (textWrite.slice(-1) === " " && textWrite.length > word[0].length) {
      const deleteSpace = textWrite.slice(0, textWrite.length - 1);
      if (deleteSpace === word[0]) {
        const deleteFirstElement = word.slice(1, word.length);
        setWordWrite("");
        setWord(deleteFirstElement);
        setCorretWord(corretWord + 1);
      } else {
        console.log("Error");
        const deleteFirstElement = word.slice(1, word.length);
        setWordWrite("");
        setWord(deleteFirstElement);
        setIncorretWord(incorretWord + 1);
      }
    }

    if (
      textWrite === word[0].slice(0, textWrite.length) ||
      textWrite === wordMoreSpace
    ) {
      const colorError = {
        border: "1px solid blue",
        color: "blue",
      };
      setErrorStyle(colorError);
    } else {
      const colorError = {
        border: "1px solid red",
        color: "red",
      };
      setErrorStyle(colorError);
    }
  };
  const handleClickChange = (e) => {
    setChangeLetters(e.target.value);
    getDataWord();
  };
  useEffect(() => {
    getDataWord();
  }, [changeLetters]);

  /* Timer */

  const handleStartTimer = () => {
    let intervalTimer;
    let count = 0;
    let countLess = timerUi;
    setStartTest(true);
    intervalTimer = setInterval(() => {
      count++;
      countLess--;
      setTimerUi(countLess);
      if (count == timer) {
        clearInterval(intervalTimer);
        setTestEnd(false);
        setTimerUi(timer);

        console.log("Bye interval");
      }
    }, 1000);
  };
  const handleTimer = (e) => {
    const stringToNumber = parseInt(e.target.value);
    setTimer(stringToNumber);
    setTimerUi(stringToNumber);
  };
  const handleChangeVerifyTimer = (e) => {
    const inputValueTimer = e.target.value;
    setTimeCustomInput(inputValueTimer);

    const INTEGER_REGEX = /^[1-9][0-9]*$/;
    if (!INTEGER_REGEX.test(inputValueTimer)) {
      setTimeCustomInputError(true);
      setTimer(30);
      setTimerUi(30);
    } else {
      setTimeCustomInputError(false);
      const stringToNumber = parseInt(e.target.value);
      setTimer(stringToNumber);
      setTimerUi(stringToNumber);
    }
  };

  function convertSecondToMinute(second) {
    if (second < 60) {
      return `${second}`;
    } else {
      const getMinuteTime = Math.trunc(second / 60);
      const getSecondTime = second - getMinuteTime * 60;
      return `${getMinuteTime} : ${getSecondTime}`;
    }
  }

  function calcWpm(badWord, goodWord, time) {
    let wordTotal = goodWord - badWord;

    const result = parseFloat(wordTotal / (time / 60)).toFixed(2);

    if (result < 0) {
      return 0;
    } else {
      return result;
    }
  }

  const handleBackClick = () => {
    setTestEnd(true);
    setStartTest(false);
    setCorretWord(0);
    setIncorretWord(0);
    setWordWrite("");
  };

  useEffect(() => {
    let resultWpm = calcWpm(incorretWord, corretWord, timer);
    setWpmTotal(resultWpm);
  }, [testEnd]);

  return (
    <div className="content-center">
      {startTest ? (
        <>
          {testEnd ? (
            <>
              <i>Tu tiempo: {convertSecondToMinute(timerUi)}</i>
              <h2>
                <div>Palabras correctas: </div>
                <b>{corretWord}</b>
              </h2>
              <h2>
                <div>Palabras incorrectas: </div>
                <b>{incorretWord}</b>
              </h2>
              <p>
                {word[0]} {word[1]}
              </p>
              {word}

              <input
                style={errorStyle}
                value={wordWrite}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <p>Los resultados son: {wpmTotal} </p>{" "}
              <button onClick={handleBackClick}>Volver atras</button>
            </>
          )}
        </>
      ) : (
        <>
          <h1>¿Quieres comenzar el Test?, dale click en el botón.</h1>

          <button onClick={handleStartTimer}>Comenzar test</button>

          <div>
            <h3>Elige los tiempos</h3>
            <button value="15" onClick={handleTimer}>
              15
            </button>
            <button value="30" onClick={handleTimer}>
              30
            </button>
            <button value="60" onClick={handleTimer}>
              60
            </button>
            <button value="120" onClick={handleTimer}>
              120
            </button>
            <label>Elegir tiempo en segundos customizable:</label>
            <span>{convertSecondToMinute(timerUi)}</span>
            <input
              type="text"
              value={timeCustomInput}
              onChange={handleChangeVerifyTimer}
            />
            {timeCustomInputError && <span>No es un numero entero</span>}
          </div>

          <div className="">
            <button value="wordThreeLetters" onClick={handleClickChange}>
              3 letras
            </button>
            <button value="wordFourLetters" onClick={handleClickChange}>
              4 letras
            </button>
            <button value="wordFiveLetters" onClick={handleClickChange}>
              5 letras
            </button>
            <button value="wordSixLetters" onClick={handleClickChange}>
              6 letras
            </button>
            <button value="wordSevenLetters" onClick={handleClickChange}>
              7 letras
            </button>
            <button value="wordEightLetters" onClick={handleClickChange}>
              8 letras
            </button>
            <button value="wordNineLetters" onClick={handleClickChange}>
              9 letras
            </button>
            <button value="wordTenLetters" onClick={handleClickChange}>
              10 letras
            </button>
          </div>
        </>
      )}
    </div>
  );
}
