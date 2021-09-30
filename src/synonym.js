export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        <ul>
          {props.synonym.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
