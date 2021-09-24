export default function Definition(props) {
  return (
    <div className="Definition">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <strong>
                <em>{definition.example}</em>
              </strong>
            </p>
          </div>
        );
      })}
    </div>
  );
}
