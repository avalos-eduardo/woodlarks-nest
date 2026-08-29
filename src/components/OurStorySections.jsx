export default function OurStorySections({ header, paragraphs }) {
  return (
    <div className="px-10 md:px-39 pb-5 h-auto">
      <h2 className="text-wood-brown text-3xl md:text-5xl font-playfair-display mb-10">
        {header}
      </h2>
      {paragraphs.map((text, index) => (
        <p
          key={index}
          className="font-lato tracking-wide text-md md:text-xl mb-3 leading-relaxed text-wood-brown"
        >
          {text}
        </p>
      ))}
    </div>
  );
}
