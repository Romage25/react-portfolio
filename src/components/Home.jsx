import { wordList } from "../data";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(wordList[currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextWordIndex = (currentWordIndex + 1) % wordList.length;

      setCurrentWordIndex(nextWordIndex);
      setCurrentWord(wordList[nextWordIndex]);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentWordIndex]);
  return (
    <>
      <section>
        <div className="text-center font-bold min-h-[80vh] bg-blue-100">
          <h6 className="text-blue-500 text-2xl mb-5 pt-36">Hey! I am</h6>
          <h1 className="text-7xl mb-5">Rodel Gerodias</h1>
          <h3 className="text-4xl word-fade">{currentWord}</h3>
        </div>
      </section>
    </>
  );
}
