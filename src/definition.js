import Synonym from "./synonym";
export default function Definition(props) {
  return (
    <div className="Definition">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              {definition.example}
              <Synonym synonym={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
