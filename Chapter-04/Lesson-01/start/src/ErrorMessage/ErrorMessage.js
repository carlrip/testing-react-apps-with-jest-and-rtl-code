import "./ErrorMessage.css";
import cross from "./cross.png";

export function ErrorMessage({ message }) {
  return (
    <div className="saveerror">
      <img src={cross} alt="cross" />
      {message}
    </div>
  );
}
