import DocInfo from "../../components/DocInfo";
import Doctor from "../../icons/doctor.jpg";
import { Outlet, Link } from "react-router-dom";
import DocButton from "../../components/DocButton/DocButton";
export default function ThirdSection() {
  return (
    <div className="third-section"  id="docPage">
      <div className="doc-info-bar-image">
     <img src={Doctor} className="doc-img" alt="Doctor" />
      </div>
      <div className="doc-info-bar">
        <DocInfo text="Name Surname" />
        <DocInfo
          paragraph="Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim,
                       non aliquam risus. Sed a tellus quis mi rhoncus dignissim"
        />
        <DocInfo
          paragraph="Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed
                       tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie.
                       Cum sociis natoque penatibus et magnis dis parturient montes,
                       nascetur ridiculus mus."
        />
          <Link style={{textDecoration: 'none'}} to="/doctor" >
            <DocButton title="Get My Profile"/>
            </Link> 
        
      </div>
      <Outlet/>
    </div>
  );
}

