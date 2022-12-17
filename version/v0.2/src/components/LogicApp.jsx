import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./logicStyle.css";

export default function LogicApp() {
  const [word, setWord] = useState([]);
  const [wordWrite, setWordWrite] = useState("");
  const [followIndex, setFollowIndex] = useState(0);

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
      let fullLetter = [];
      json.forEach((element) => {
        const wordSeparate = element.word;
        for (let i = 0; i < wordSeparate.length; i++) {
          const item = wordSeparate[i];
          const createLetter = {
            letterElement: item,
            id: crypto.randomUUID(),
            writeType: false,
          };
          fullLetter.push(createLetter);
        }
      });
      setWord(fullLetter);
    } catch (err) {}
  }
  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
    }
  };
  const handleChange = (e) => {
    const valueCapture = e.target.value;
    let valueCaptureLength = valueCapture.length - 1;
    setWordWrite(valueCapture);

    console.log("our write: " + `${e.target.value[valueCaptureLength]}`);
    console.log("machine write: " + `${word[followIndex].letterElement}`);

    const validate =
      valueCapture.slice(-1) === word[followIndex].letterElement &&
      valueCaptureLength === followIndex;

    if (validate) {
      setFollowIndex(followIndex + 1);
      console.log("Check");
    } else if (valueCapture.slice(-1) === " ") {
      console.log("espacio");
    } else {
      console.log("Error");
      console.log(valueCapture.slice(-1) === word[followIndex].letterElement);
      console.log(valueCaptureLength === followIndex);

      let wordTemp = [...word];
      let otherVar = wordTemp.find((item) => item.id === word[followIndex].id);
      console.log(otherVar);
      otherVar.writeType = true;
      setWord(wordTemp);
      setFollowIndex(followIndex + 1);
    }
  };

  useEffect(() => {
    getDataWord();
  }, []);

  return (
    <div className="content-center">
      <p>
        {word.map((item, k) => {
          return (
            <>
              {item.writeType ? (
                <>
                  <i className="bad-job" key={item.id}>
                    {item.letterElement}
                  </i>
                </>
              ) : (
                <>
                  <i className="good-job" key={item.id}>
                    {item.letterElement}
                  </i>
                </>
              )}
            </>
          );
        })}
      </p>
      <input
        type="text"
        value={wordWrite}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
