import Definition from "./definition";
import Phonetic from "./phonetic";
import "./App.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Result">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Definition meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
