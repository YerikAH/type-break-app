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
  const [startTest, setStartTest] = useState(false);


  /* Timer */
const [timer, setTimer] = useState(30)
const [timerUi, setTimerUi] = useState(30)

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
      for (let i = 0; i < 100; i++) {
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

  const handleStartTimer = () =>{
    let intervalTimer;
    let count  = 0 
    setStartTest(true)
    intervalTimer=setInterval(()=>{
      count++
      console.log(count)
      if(count == timer){
        clearInterval(intervalTimer)
        console.log("Bye interval")
      }
    },1000)
  }
  const handleTimer = (e)=>{
    const stringToNumber = parseInt(e.target.value)
    setTimer(stringToNumber)
    setTimerUi(stringToNumber)
  }

  return (
    <div className="content-center">
      {startTest ? (
        <>
          <i>Tu tiempo: </i>
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
          <input style={errorStyle} value={wordWrite} onChange={handleChange} />
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
      ) : (
        <>
          <h1>¿Quieres comenzar el Test?, dale click en el botón.</h1>
          
          <button onClick={handleStartTimer}>Comenzar test</button>

          <div>
            <h3>Elige los tiempos</h3>
            <button value="15">15</button><button value="30">30</button><button value="60">60</button><button value="120">120</button>
          </div>
        </>
      )}
    </div>
  );
}
