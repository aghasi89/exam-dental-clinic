export default function InfoBar(props) {
  return (
    <div>
      <div className="info-bar-main-title"><h3>{props.title}</h3>
      <h1>{props.text}</h1>
      </div>
      <div>{props.paragraph}</div>
    </div>
  );
}