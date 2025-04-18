import { expCards } from "../../../constants";
import GlowCard from "../GlowCard/GlowCard";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperianceSection() {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        duration: 1.5,
        opacity: 0,
        transformOrigin: "left left",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        scrub: true,
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        duration: 1.5,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="section-padding md:mt-40 mt-20 w-full xl:p-0"
    >
      <div className="w-full h-full md:px-20 px-5 ">
        <HeaderTitle
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative ">
          <div className="relative z-50 xl:space-y-32 space-y-10 ">
            {expCards.map((card, index) => (
              <div key={card.title} className="xl:flex gap-10">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <p> 💻 {card.title}</p>
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper ">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText relative z-20 flex xl:gap-20 md:gap-10 gap-5">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="text-3xl font-semibold">{card.text}</h1>
                        <p className="text-white-50 my-5"> 📅 {card.date}</p>
                        <p className="text-[#839cb5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((item, index) => (
                            <li className="text-lg" key={index}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
