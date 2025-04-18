import { testimonials } from "../../../constants";
import GlowCard from "../GlowCard/GlowCard";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

export default function Testimonals() {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <HeaderTitle
          title="What People Say About Me?"
          sub="🌟 Customer feedback highlights"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial) => (
            <GlowCard key={testimonial.name} card={testimonial}>
              <div className="flex items-center gap-3">
                <div className="">
                  <img src={testimonial.imgPath} alt={testimonial.name} />
                </div>
                <div className="">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
