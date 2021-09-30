import Synonym from "./synonym";
import "./App.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <div className="example opacity-75 fst-italic">
              "{definition.example}."
            </div>
            <Synonym synonym={definition.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
