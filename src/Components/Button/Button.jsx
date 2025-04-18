export default function Button({ text, className, id , hrefTo }) {
  return (
    <a href={hrefTo} target="_blank" className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group ">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="./images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}
