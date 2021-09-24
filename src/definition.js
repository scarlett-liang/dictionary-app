export default function Definition(props) {
  return (
    <div className="Definition">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className={index}>
            <p>{definition.definition}</p>
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
