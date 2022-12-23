import { useEffect } from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import OptionsModal from "./components/OptionsModal";

function App() {
  const [word, setWord] = useState([]);
  const [changeLetters, setChangeLetters] = useState("wordFourLetters");
  const [modal, setModal] = useState(false);

  /* render */
  const [startTest, setStartTest] = useState(false);
  const [testEnd, setTestEnd] = useState(true);

  /* Timer */

  const [timer, setTimer] = useState(30);
  const [timerUi, setTimerUi] = useState(30);

  /* Loader */
  const [viewLoader, setViewLoader] = useState(false);

  async function getDataWord() {
    let url = "data.json";
    try {
      setViewLoader(true);
      let res = await fetch(url);
      let json = await res.json();

      if (!res.ok) {
        throw {
          resStatus: res.status,
          resStatusText: res.statusText,
        };
      }
      let saveJsonWord = [];
      for (let i = 0; i < 1000; i++) {
        const selectArrJsonWord = json[0][changeLetters];
        const numberRandom = Math.floor(
          Math.random() * selectArrJsonWord.length
        );
        const getContentJsonWork = selectArrJsonWord[numberRandom];

        saveJsonWord.push(getContentJsonWork);
      }
      setWord(saveJsonWord);
      setViewLoader(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDataWord();
  }, [changeLetters]);
  return (
    <>
      <Header timerUi={timerUi} />
      <MainContent
        word={word}
        setWord={setWord}
        testEnd={testEnd}
        startTest={startTest}
        setStartTest={setStartTest}
        timerUi={timerUi}
        setTimerUi={setTimerUi}
        timer={timer}
        setTestEnd={setTestEnd}
      />
      <Footer
        setModal={setModal}
        modal={modal}
        startTest={startTest}
        testEnd={testEnd}
        setTestEnd={setTestEnd}
        setStartTest={setStartTest}
        viewLoader={viewLoader}
      ></Footer>
      {modal && (
        <OptionsModal
          viewLoader={viewLoader}
          setChangeLetters={setChangeLetters}
          setTimer={setTimer}
          setTimerUi={setTimerUi}
        ></OptionsModal>
      )}
    </>
  );
}

export default App;
