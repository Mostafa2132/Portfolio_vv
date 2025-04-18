import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { counterItems } from "../../../constants";

export default function AnimatedCounter() {
  return (
    <div className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <CounterBox key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}

function CounterBox({ item }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // يشغل مرة واحدة بس
    threshold: 0.3,     // يبدأ لما 30% من العنصر يظهر
  });

  return (
    <div
      ref={ref}
      className="bg-zinc-900 p-10 rounded-lg flex justify-center flex-col"
    >
      <div className="counter-number text-5xl text-white font-bold mb-2">
        {inView && (
          <CountUp suffix={item.suffix} end={item.value} duration={5} />
        )}
      </div>
      <div className="text-white-50 text-lg">{item.label}</div>
    </div>
  );
}
