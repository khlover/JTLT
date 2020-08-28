import React, { useEffect, useState } from "react";
import { getTweets } from "../api/getTweets";
import Tweets from "../components/Tweets";

export const TwitterContainer = (props) => {
  const [idData, setIdData] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    getTweets(props.search).then((data) => {
      let newIds = [];
      for (let x = 0; x < Object.keys(data.statuses).length; x++) {
        newIds.push(data.statuses[x].id_str);
      }
      setIdData(newIds);
      setCurrentId(0);
    });
  }, [props.search]);

  function leftBtn() {
    if (currentId > 2) {
      setCurrentId(currentId - 1);
    }
  }

  function rightBtn() {
    if (currentId < Object.keys(idData).length - 1) {
      setCurrentId(currentId + 1);
    }
  }

  return (
    <div>
      <Tweets id={idData[currentId]} />

      <div style={{ textAlign: "center" }}>
        <p style={{ text_align: "center" }}>
          {currentId + 1}/{Object.keys(idData).length}
        </p>
        <button
          style={{ transform: "scale(2)", position: "relative", right: "50px" }}
          onClick={leftBtn}
        >
          Back
        </button>
        <button
          style={{ transform: "scale(2)", position: "relative", left: "50px" }}
          onClick={rightBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
};
