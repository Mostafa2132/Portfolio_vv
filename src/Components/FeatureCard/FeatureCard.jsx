import { abilities } from "../../../constants";

export default function FeatureCard() {
  return (
    <div className="padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map((ability) => (
          <div
            key={ability.title}
            className="card-border rounded-xl p-8 flex flex-col gap-4 "
          >
            <div className="size-14 flex justify-center items-center rounded-full ">
              <img src={ability.imgPath} alt={ability.title} />
            </div>
            <h3 className="text-2xl font-semibold mt-2 text-white">
              {ability.title}
            </h3>
            <p className="text-white-50  text-lg">{ability.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
