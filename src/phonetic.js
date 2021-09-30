import "./App.css";
export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fas fa-volume-up"></i>
      </a>{" "}
      <span className="pronounciation opacity-75">/{props.phonetic.text}/</span>
    </div>
  );
}
