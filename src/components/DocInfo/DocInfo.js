export default function DocInfo(props) {
  return (
    <div>
      <div className="doc-info-bar-main-title"><h3>{props.title}</h3>
      <h1  className="th-txt">{props.text}</h1>
      </div>
      <div  className="sec-txt">{props.paragraph}</div>
    </div>
  );
}