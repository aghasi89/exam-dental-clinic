export default function InfoBar(props) {
  return (
    <div>
      <div className="info-bar-main-title"><h3>{props.title}</h3>
      <h1 className="second-txt">{props.text}</h1>
      </div>
      <div className="sec-txt">{props.paragraph}</div>
    </div>
  );
}