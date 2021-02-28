import "./ErrorMessage.css";
import cross from "./cross.png";

export function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <img src={cross} alt="cross" />
      {message}
    </div>
  );
}
