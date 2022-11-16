import DocInfo from "../../components/DocInfo";
import Doctor from "../../icons/doctor.jpg"
import Button from "../../components/Button";


export default function ThirdSection() {
    return (
      < div className="third-section">
             <div className="doc-info-bar-image">
        <img src={Doctor} className="doc-img" alt='Doctor'/>
        </div>
        <div className="doc-info-bar">
          <DocInfo text="Name Surname" />
          <DocInfo paragraph="Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim,
                       non aliquam risus. Sed a tellus quis mi rhoncus dignissim" />
          <DocInfo paragraph="Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed
                       tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie.
                       Cum sociis natoque penatibus et magnis dis parturient montes,
                       nascetur ridiculus mus." />
          <Button title="Learn more..."/>
          <div className="doc-chapter-price">
       
        <div className="doc-chapter-title-price">OUR PRICES</div>
        <div className="doc-chapter-rectangle-price"></div>
        </div>
       </div>
      </div>
    );
  }
  