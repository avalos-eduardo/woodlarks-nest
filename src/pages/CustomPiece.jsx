function FAQ({ header, paragraph }) {
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

export default function CustomPiece() {
  return (
    <>
      <section className="flex flex-col bg-[#544635] text-[#EDE8D8] justify-center items-center py-15 h-auto gap-6">
        <h1 className="text-3xl md:text-5xl font-playfair-display text-center">
          Start a Custom Piece
        </h1>
        <p className="font-lato text-md lg:text-xl max-9/10 lg:max-w-5/8 text-left px-8 leading-relaxed tracking-wide">
          Whether you have a clear vision or just the beginning of an idea, we
          would love to start a conversation. Share a little about what you’re
          thinking and we can work through the details together.
        </p>
      </section>

      <section className="h-auto py-50"></section>

      <section className="flex flex-col bg-[#2A2C0C] justify-center py-15 h-auto">
        <h3 className="text-3xl lg:text-4xl font-playfair-display text-center text-offwhite mb-8">
          FAQs
        </h3>
        <FAQ
          header="How custom can the piece be?"
          paragraph="Most details can be tailored to your home, including dimensions, wood species, finish, and functional needs."
        />
        <hr className="my-10 text-offwhite mx-10" />
        <FAQ
          header="Will I see the design before you build it?"
          paragraph="Yes. We review the design, dimensions, wood choice, and finish direction before the build begins so you can feel confident in the final piece."
        />
        <hr className="my-10 text-offwhite mx-10" />
        <FAQ
          header="How long does a custom piece take?"
          paragraph="Timelines vary by size, complexity, material availability, and our current schedule. We will discuss expected timing before your piece is officially scheduled."
        />
        <hr className="my-10 text-offwhite mx-10" />
        <FAQ
          header="Do you deliver?"
          paragraph="Yes. Delivery and placement are coordinated once the piece is complete and ready for your home."
        />
        <hr className="my-10 text-offwhite mx-10" />
        <FAQ
          header="What happens after delivery?"
          paragraph="We provide simple care guidance so you know how to protect the finish and help the piece age beautifully."
        />
        <hr className="my-10 text-offwhite mx-10" />
        <FAQ
          header="What is the payment process?"
          paragraph="A design fee is required before detailed design work begins. Once the design and quote are approved, a production deposit secures materials and scheduling."
        />
      </section>
    </>
  );
}
