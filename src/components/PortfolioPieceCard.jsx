export default function PortfolioPieceCard({ img, description, alt }) {
  return (
    <div>
      <img src={img} className="object-cover" alt={alt} />
      <p className="my-4 text-sm font-lato text-wood-brown">{description}</p>
    </div>
  );
}
