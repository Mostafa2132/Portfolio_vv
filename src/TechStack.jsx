import { useGSAP } from "@gsap/react";
import { techStackImgs } from "../constants";
import HeaderTitle from "./Components/HeaderTitle/HeaderTitle";

import gsap from "gsap";

export default function TechStack() {

useGSAP(() => {


gsap.fromTo(
    ".tech-card",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
      },
    })
},[] );

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <HeaderTitle
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table "
        />
        <div className="tech-grid">
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border mx-auto  tech-card overflow-hidden group rounded-lg xl:rounded-full"
            >
              <div className="tech-card-animated-bg"/>
              <div className="tech-card-content mx-auto ">
                <div className="tech-icon-wrapper ">
                  <img src={icon.imgPath} alt={icon.name} className="size-24 object-cover" />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
