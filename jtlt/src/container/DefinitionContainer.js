import React, { useEffect, useState } from "react";
import { getDefo } from "../api/getDefo";
import Definition from "../components/Definition";

export const DefinitionContainer = (props) => {
  const [kana, setKana] = useState("");
  const [eng, setEng] = useState("");
  const [kanji, setKanji] = useState("");
  const [altEng, setAltEng] = useState("");

  useEffect(() => {
    getDefo(props.search).then((data) => {
      setKana(data[0].japanese[0].reading);
      setKanji(data[0].japanese[0].word);
      setEng(data[0].senses[0].english_definitions[0]);

      if (data[0].senses.length >= 2) {
        setAltEng(`/ ${data[0].senses[1].english_definitions[0]}`);
      }
    });
  }, [props.search]);

  return (
    <>
      <Definition kana={kana} kanji={kanji} eng={eng} altEng={altEng} />
    </>
  );
};
