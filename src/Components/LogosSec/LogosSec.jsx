import { logoIconsList } from "../../../constants";

export default function LogosSec() {
  return (
    <div className="md:my-20 my-10 ">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((logo, index) => (
            <img key={index} className="size-12 mx-12" src={logo.imgPath} alt={logo.title} />
          ))}
          {logoIconsList.map((logo, index) => (
            <img key={index} className="size-12 mx-12" src={logo.imgPath} alt={logo.title} />
          ))}
          {logoIconsList.map((logo, index) => (
            <img key={index} className="size-12 mx-12" src={logo.imgPath} alt={logo.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
