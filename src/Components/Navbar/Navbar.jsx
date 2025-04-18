import { useEffect, useState } from "react";
import { navLinks } from "../../../constants";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScroll(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scroll ? "scrolled" : " not-scrolled"} `}>
      <div className="inner">
        <a href="#hero" className="logo">
          Mostafa | M.E
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="group">
                <a href={link.link}>
                  <span>{link.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span> Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
}
