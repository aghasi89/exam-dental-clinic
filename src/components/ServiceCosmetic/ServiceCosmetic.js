import Cosmetic from "../../icons/cosmetic.png";

export default function ServiceCosmetic({ title }) {
  return (
    <div className="">
      <img src={Cosmetic} className="" alt="Cosmetic" />
      <p className="">{title}</p>
    </div>
  );
}
