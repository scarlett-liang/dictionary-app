import "./App.css";
import ReactAudioPlayer from "react-audio-player";
export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="pronounciation opacity-75">/{props.phonetic.text}/</div>
      <ReactAudioPlayer src={props.phonetic.audio} controls />{" "}
    </div>
  );
}
