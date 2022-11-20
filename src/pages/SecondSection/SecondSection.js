import InfoBar from "../../components/InfoBar";
import Service from "../../icons/service.jpg";
import Button from "../../components/Button";
import { Outlet, Link } from "react-router-dom";
export default function SecondSection() {
  return (
    <div className="second-section">
      <div className="info-bar">
        <InfoBar title="WHAT WE DO" />
        <InfoBar text="Clinic Service" />
        <InfoBar
          paragraph="Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim,
                       non aliquam risus. Sed a tellus quis mi rhoncus dignissim"
        />
        <InfoBar
          paragraph="Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed
                       tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie.
                       Cum sociis natoque penatibus et magnis dis parturient montes,
                       nascetur ridiculus mus."
        />
            <Link to="/service"><Button title="Learn more..."/></Link> 
        <div className="doc-chapter">
          <div className="doc-chapter-rectangle"></div>
          <div className="doc-chapter-title">GET TO KNOW</div>
        </div>
      </div>
      <div className="info-bar-image">
        <img src={Service} className="service-img" alt="Service" />
      </div>
      <Outlet/>
    </div>
  );
}
