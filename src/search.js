import { useState } from "react";
import axios from "axios";
import "./App.css";
import Result from "./result";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // document: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Search">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="What word do u wanna look up 📖?"
            autoFocus={true}
            onChange={handleChange}
          />
        </form>
        <div className="hint opacity-75">
          Hint: volleyball, festival, psychology,etc
        </div>
      </section>
      <Result results={results} />
    </div>
  );
}
