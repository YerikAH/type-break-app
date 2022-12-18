import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./logicStyle.css";

export default function LogicApp() {
  const [word, setWord] = useState([]);
  const [wordWrite, setWordWrite] = useState("");
  const [followIndex, setFollowIndex] = useState(0);
  const [changeLetters, setChangeLetters] = useState("wordFourLetters")

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
    setWordWrite(textWrite);
    if (textWrite.slice(-1) === " ") {
      const deleteSpace = textWrite.slice(0, textWrite.length - 1);
      if (deleteSpace === word[0]) {
        const deleteFirstElement = word.slice(1, word.length);
        setWordWrite("");
        setWord(deleteFirstElement);
      } else {
        console.log("Error");
      }
    }
  };
  const handleClickChange = (e) =>{
    setChangeLetters(e.target.value)
    getDataWord();
  }
  useEffect(() => {
    getDataWord();
  }, [changeLetters]);

  return (
    <div className="content-center">
      <p>
        {word[0]} {word[1]}
      </p>
      {word}
      <input value={wordWrite} onChange={handleChange} />
      <div className="">
        <button value="wordThreeLetters" onClick={handleClickChange} >3 letras</button>
        <button value="wordFourLetters" onClick={handleClickChange}>4 letras</button>
        <button value="wordFiveLetters" onClick={handleClickChange}>5 letras</button>
        <button value="wordSixLetters" onClick={handleClickChange}>6 letras</button>
        <button value="wordSevenLetters" onClick={handleClickChange}>7 letras</button>
        <button value="wordEightLetters" onClick={handleClickChange}>8 letras</button>
        <button value="wordNineLetters" onClick={handleClickChange}>9 letras</button>
        <button value="wordTenLetters" onClick={handleClickChange}>10 letras</button>
      </div>
    </div>
  );
}
