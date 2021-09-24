import Definition from "./definition";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Result">
        <h2>{props.results.word}</h2>
        <h4>[{props.results.phonetics[0].text}]</h4>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className={index}>
              <Definition meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
