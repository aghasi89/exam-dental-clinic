export default function Button(props) {
  return (
    <div>
      <div className="info-bar-button" id="id-info-bar-button">
        {props.title}
      </div>
      <div>
        <button onClick={props.onPress}>{props.label}</button>;
      </div>
    </div>
  );
}
