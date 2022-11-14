import Menu from "../../components/Menu/Menu"

export default function Nav() {
    return (
      <div className="nav">
         <div className="menu-bar">
        <Menu title="Home" />
        <Menu title="About Us" />
        <Menu title="Services" />
        <Menu title="Doctor" />
        <Menu title="Price" />
        <Menu title="Contact" />
        </div>
        <div className="search-bar">
          <input  class="search" type="text" placeholder="Search.." name="search"/>
        </div>
      </div>
    );
  }
  