import { socialImgs } from "../../../constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Vist My Portfolio</a>
        </div>
        <div className="socials">
          {socialImgs.map((icon) => (
            <a className="icon" target="_blank" href={icon.url} key={icon.url}>
             {icon.icon ? <i className={icon.icon}></i>: <img src={icon.imgPath} alt={icon.name} />}
            </a>
          ))}
        </div>
<div className="flex flex-col justify-center">

<p className="text-center md:text-end">
  &copy; {new Date().getFullYear()} Mostafa | All rights reserved
</p>
</div>
      </div>
    </footer>
  );
}
