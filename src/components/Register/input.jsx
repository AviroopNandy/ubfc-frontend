import "./styles.css";


export default function Input(props) {
  
  return (
    <div className="Login__input-container">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        required
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
