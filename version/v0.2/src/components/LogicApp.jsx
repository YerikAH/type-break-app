import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./logicStyle.css";

export default function LogicApp() {
  const [word, setWord] = useState([]);
  const [wordWrite, setWordWrite] = useState("");
  const [followIndex, setFollowIndex] = useState(0);
  const [lesscount, setLesscount] = useState(0)
  const [countSpace, setCountSpace] = useState(0)

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
          };
          fullLetter.push(createLetter);
        }
      });
      setWord(fullLetter);
    } catch (err) {}
  }

  const handleChange = (e) => {
    const valueCapture = e.target.value;
    let valueCaptureLength = (valueCapture.length - 1) - lesscount
    setWordWrite(valueCapture);

    if (
      valueCapture.slice(-1) === word[followIndex].letterElement &&
      valueCaptureLength === followIndex && lesscount === countSpace
    ) {
      if(followIndex%4===3){
        setCountSpace(countSpace + 1 )
      }


      setFollowIndex(followIndex + 1);
      console.log("Check");
    } else if (valueCapture.slice(-1) === " ") {
      if(followIndex%4===3){
        setLesscount(lesscount + 1)
      }
      console.log("espacio");
    } else {

      if (valueCaptureLength < followIndex) {
        setFollowIndex(followIndex - 1);
        console.log("Regresando");
      }else{
        console.log("Error");
      }
    }
    console.log(lesscount)
    console.log(countSpace)



    // console.log("our write " + `${e.target.value[valueCaptureLength]}`);
    // console.log("machine write " + `${word[followIndex].letterElement}`);
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
              <i key={item.id}>{item.letterElement}</i>
              {(k + 1) % 4 == 0 && " "}
            </>
          );
        })}
      </p>
      <input type="text" value={wordWrite} onChange={handleChange} />
    </div>
  );
}
