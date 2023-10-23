import React, { useState } from "react";

function getValue(input) {
  const results = [];

  function shuffle(str, remain) {
    if (remain.length === 0) {
      results.push(str);
    } else {
      for (let i = 0; i < remain.length; i++) {
        const char = remain[i];
        const rest = remain.slice(0, i) + remain.slice(i + 1);
        shuffle(str + char, rest);
      }
    }
  }

  shuffle("", input);
  return [...new Set(results)];
}

function findTheOddInt(value) {
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    result ^= value[i];
  }
  return result;
}

function countSmileys(value) {
  const regex = /[:;][-~]?[)D]/;

  return value.filter((face) => regex.test(face)).length;
}

function ExampleShuffle() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const arry1 = [7];
  const arry2 = [0];
  const arry3 = [1, 1, 2];
  const arry4 = [0, 1, 0, 1, 0];
  const arry5 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

  const smile1 = [":)", ";(", ";}", ":-D"];
  const smile2 = [";D", ":-(", ":-)", ";~)"];
  const smile3 = [";]", ":[", ";*", ":$", ";-D"];

  const calculateValue = () => {
    const results = getValue(input);
    setList(results);
  };

  return (
    <div>
      <strong>Example 1 :</strong>
      <div>Input:</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={calculateValue}>Confirm</button>
      <div>
        <div>Output:</div> [{list.join(", ")}]
      </div>

      <div>
        <strong>Example 2 :</strong>
        <div>{findTheOddInt(arry5)}</div>
      </div>

      <div>
        <strong>Example 3 :</strong>
        <div>{countSmileys(smile3)}</div>
      </div>
    </div>
  );
}

export default ExampleShuffle;
