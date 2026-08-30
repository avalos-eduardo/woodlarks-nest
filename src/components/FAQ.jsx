export default function FAQ({ header, paragraph }) {
  return (
    <>
      <div className="flex justify-between text-offwhite flex-col lg:flex-row">
        <h4 className="flex-1 font-playfair-display text-lg lg:text-2xl px-12 lg:pl-22 mb-5 lg:mb-0">
          {header}
        </h4>
        <p className="flex-1 font-lato tracking-wide leading-relaxed text-[14px] lg:text-[16px] px-12 lg:pr-12">
          {paragraph}
        </p>
      </div>
    </>
  );
}
