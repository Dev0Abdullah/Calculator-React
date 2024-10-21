import { useState } from "react";
import "./index.css";

function App() {
  const [value, setvalue] = useState("");
  return (
    <div className="App">
      <div className="calculator">
        <div className="output">
          <input type="text" readOnly value={value} />
        </div>
        <div className="inputs">
          <div>
            <input
              className="privat del"
              type="button"
              value="AC"
              onClick={(e) => {
                setvalue("");
              }}
            />
            <input
              className="privat del"
              type="button"
              value="DE"
              onClick={(e) => {
                setvalue(value.slice(0, -1));
              }}
            />
            <input
              className="privat"
              type="button"
              value="."
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              className="privat"
              type="button"
              value="/"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              className="privat"
              type="button"
              value="*"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              className="privat"
              type="button"
              value="+"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              className="privat"
              type="button"
              value="-"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="0"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              type="button"
              value="00"
              onClick={(e) => {
                setvalue(value + e.target.value);
              }}
            />
            <input
              className="privat equal"
              type="button"
              value="="
              onClick={(e) => {
                setvalue(eval(value));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
