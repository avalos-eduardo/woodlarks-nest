import diningTableImg from "../assets/woodlark-dining-table.webp";

export default function Home() {
  return (
    <section className="relative w-full h-130 2xl:h-200 overflow-hidden text-[#EEE8D8]">
      <img
        src={diningTableImg}
        alt="Hero image of dining table and dining chairs."
        className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_15%,rgba(0,0,0,0.3)_15%,transparent_100%)]"></div>
      <div class="flex flex-col h-full items-center justify-center gap-8 lg:gap-12 px-5 pb-4">
        <h1 className="text-5xl lg:text-7xl font-playfair-display text-center">
          Handcrafted for <span className="italic">Your</span> Nest
        </h1>
        <p className="text-xl lg:text-3xl font-lato font-thin text-center max-w-4/5">
          Custom hardwood furniture, from our nest to yours
        </p>
        <button className="bg-[#EDE8D8] text-[#503E2D] py-2 px-4 lg:py-4 lg:px-8 rounded-lg text-xl lg:text-2xl font-playfair-display font-semibold text-center cursor-pointer">
          Start Your Custom Piece
        </button>
      </div>
    </section>
  );
}
