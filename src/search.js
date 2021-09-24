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
      <form onSubmit={handleSubmit}>
        <div className="row g-3 text-center">
          <input
            type="search"
            className="col-8 ms-5"
            placeholder="What word do u wanna look up?"
            autoFocus={true}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary col ms-1 me-5">
            Search
          </button>
        </div>
      </form>
      <Result results={results} />
    </div>
  );
}
