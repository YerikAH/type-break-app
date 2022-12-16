import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function LogicApp() {
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
      console.log(json);
    } catch (err) {}
  }
  const [word, setWord] = useState([]);
  const [wordWrite, setWordWrite] = useState("");

  const handleChange = (e) => {
    setWordWrite(e.target.value);
  };

  useEffect(() => {
    const dataWord = getDataWord();
    setWord(dataWord);
  }, []);

  return (
    <div className="content-center">
      <p>
        {word.map((item) => (
          <i key={item.word}>{item.word}</i>
        ))}
      </p>
      <input type="text" value={wordWrite} onChange={handleChange} />
    </div>
  );
}
