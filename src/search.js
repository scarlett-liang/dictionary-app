import { useState } from "react";
import axios from "axios";
import "./App.css";
import Result from "./result";
import Photo from "./photo";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // document: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    // document: https://www.pexels.com/api/documentation/
    let pexelsApiKey = `563492ad6f91700001000001ad09a6aa4b4644ae87eb5f882dd588cf`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photo photo={photos} />
    </div>
  );
}
