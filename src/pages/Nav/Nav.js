import Menu from "../../components/Menu/Menu";

export default function Nav() {
  return (
    <div className="nav">
      <div className="menu-bar">
        <a href="home">
          <Menu title="Home" />
        </a>
        <a href="services">
          <Menu title="About Us" />
        </a>
        <a href="services">
          <Menu title="Services" />
        </a>
        <a href="doctor">
          <Menu title="Doctor" />
        </a>
        <a href="sec-4">
          <Menu title="Price" />
        </a>
        <a href="sec-5">
          <Menu title="Contact" />
        </a>
      </div>
      <div className="search-bar">
        <input
          class="search"
          type="text"
          placeholder="Search.."
          name="search"
        />
      </div>
    </div>
  );
}
