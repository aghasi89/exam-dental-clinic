import Menu from "../../components/Menu/Menu";
import useT from "../../useT";
export default function Nav() {
  const { t } = useT();
  return (
    <div className="nav">
      <div className="menu-bar">
        <a
          href="/home#about"
          style={{ textDecoration: "none", color: "#FFF", background: "none" }}
        >
          <Menu title={t("about_us")} />
        </a>
        <a
          href="/home#service"
          style={{ textDecoration: "none", color: "#FFF", background: "none" }}
        >
          <Menu title="Services" />{" "}
        </a>
        <a
          href="/home#docPage"
          style={{ textDecoration: "none", color: "#FFF", background: "none" }}
        >
          <Menu title="Doctor" />{" "}
        </a>
        <a
          href="/home#clinic"
          style={{ textDecoration: "none", color: "#FFF", background: "none" }}
        >
          <Menu title="Clinic" />{" "}
        </a>
        <a
          href="/home#contact"
          style={{ textDecoration: "none", color: "#FFF", background: "none" }}
        >
          <Menu title="Contact" />{" "}
        </a>
      </div>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Search.."
          name="search"
        />
      </div>
    </div>
  );
}
