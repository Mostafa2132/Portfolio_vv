import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function ShowCases() {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref, project2Ref, project3Ref];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card.current,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power1.inOut" }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full ">
        <div className="showcaselayout">
          {/* left */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="./images/project1.png" alt="E-commerce" />
            </div>
            <div className="text-content">
              <h1 className="text-xl md:text-3xl font-bold mt-2">
                🛒 Fresh Cart - A Complete E-Commerce Platform
              </h1>
              <p>
                Fresh Cart is a modern and fully functional e-commerce platform
                designed to provide a smooth and efficient shopping experience.
              </p>
            </div>
          </div>
          {/*            right */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="./images/project2.png" alt="Zentry Award" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold mt-2">
                Zentry Award
              </h1>
            </div>
            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="./images/project3.png"
                  alt="Gercht Restaurant Website"
                />
              </div>
              <h1 className="text-xl md:text-3xl font-bold mt-2">
                Gercht Restaurant Website
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
