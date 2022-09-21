import "./styles.css";

export default function Input(props) {
  return (
    <div className="Signup__input-container">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        required
      />
    </div>
  );
}
