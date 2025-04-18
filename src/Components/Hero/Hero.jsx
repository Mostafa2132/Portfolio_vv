import { words } from "../../../constants";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";
import Button from "../Button/Button";
import HeroModel from "../HeroModel/HeroModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power1.inOut", stagger: 0.3 }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 ">
        <img src="./images/bg.png" alt="hero-img" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 ">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 relative md:text-lg z-10 pointer-events-none">
              Hi, I&apos;m a Front-end developer with a passion for creating
              innovative and user-friendly web applications.
            </p>
            <Button
              text="Download My CV"
              hrefTo="https://drive.google.com/file/d/1BulC7gs-yqUrK1yWJlA39rWsFe-GAwGL/view?usp=sharing"
              className="md:w-80 md:h-16 w-60 h-12"
              id="cta"
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroModel />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
}
