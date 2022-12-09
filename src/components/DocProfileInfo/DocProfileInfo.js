export default function DocProfileInfo(props) {
    return (
      <div>
        <div><h1  > {props.title}</h1></div>
        <h3 >{props.specialist}</h3>
        <div> {props.text} </div>
   

    
      </div>
    );
  }
  