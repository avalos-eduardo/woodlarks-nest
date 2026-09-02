import FAQ from "../components/FAQ";
import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function CustomPiece() {
  const [files, setFiles] = useState([]);
  const [fileError, setFileError] = useState("");

  const MAX_FILES = 5;
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files || []);

    setFileError("");

    if (!selectedFiles.length) {
      return;
    }

    // Maximum number of attachments
    if (files.length + selectedFiles.length > MAX_FILES) {
      setFileError("You can upload a maximum of 5 images.");
      e.target.value = "";
      return;
    }

    const validFiles = [];

    for (const file of selectedFiles) {
      // Make sure it's an image
      if (!file.type.startsWith("image/")) {
        setFileError(`${file.name} is not a supported image file.`);
        continue;
      }

      // Maximum file size
      if (file.size > MAX_FILE_SIZE) {
        setFileError(`${file.name} is too large. Images must be under 10 MB.`);
        continue;
      }

      // Prevent duplicate files
      const alreadyExists = files.some(
        (existingFile) =>
          existingFile.file.name === file.name &&
          existingFile.file.size === file.size &&
          existingFile.file.lastModified === file.lastModified,
      );

      if (alreadyExists) {
        setFileError(`${file.name} has already been added.`);
        continue;
      }

      validFiles.push({
        file,
        status: "ready",
        error: null,
      });
    }

    if (validFiles.length) {
      setFiles((currentFiles) => [...currentFiles, ...validFiles]);
    }

    e.target.value = "";
  };

  useDocumentTitle("Start a Custom Piece — The Woodlark's Nest");

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

      <section className="h-auto py-15 lg:py-20 grid place-items-center">
        <form className="flex flex-col bg-offwhite rounded-3xl w-[85vw] md:w-[55vw] p-8 md:p-10 lg:p-12 font-lato text-wood-brown">
          <p className="text-xl mb-3">Name</p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label>
                First Name <span className="font-thin">(required)</span>
              </label>
              <input
                type="text"
                className="bg-white rounded-lg h-11 px-3 outline-none border border-transparent focus:border-wood-brown"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label>
                Last Name <span className="font-thin">(required)</span>
              </label>
              <input
                type="text"
                className="bg-white rounded-lg h-11 px-3 outline-none border border-transparent focus:border-wood-brown"
                required
              />
            </div>
          </div>

          <label className="text-xl mt-7 mb-3">
            Email <span className="text-base font-thin">(required)</span>
          </label>
          <input
            type="email"
            className="bg-white rounded-lg h-11 px-3 outline-none border border-transparent focus:border-wood-brown"
            required
          />
          <label className="flex items-center cursor-pointer select-none mt-3">
            <input
              type="checkbox"
              className="mr-3 appearance-none rounded-full h-4 w-4 border border-[#9b9585] bg-transparent cursor-pointer checked:bg-wood-brown"
            />
            <span>Sign up for news and updates</span>
          </label>

          <label className="text-xl mt-7 mb-3">Phone</label>
          <input
            type="tel"
            className="bg-white rounded-lg h-11 px-3 outline-none border border-transparent focus:border-wood-brown"
          />

          <label className="text-xl mt-7 mb-3">
            What kind of piece are you interested in?{" "}
            <span className="text-base font-thin">(required)</span>
          </label>
          <select
            className="bg-white rounded-lg h-11 px-3 text-[#777] outline-none border border-transparent focus:border-wood-brown cursor-pointer"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="dining-table">Dining Table</option>
            <option value="coffee-table">Coffee Table</option>
            <option value="console-table">End/Accent Table</option>
            <option value="cabinet">Console Table</option>
            <option value="other">Other</option>
          </select>

          <label className="text-xl mt-7 mb-3">
            Budget <span className="text-base font-thin">(required)</span>
          </label>
          <select
            className="bg-white rounded-lg h-11 px-3 text-[#777] outline-none border border-transparent focus:border-wood-brown cursor-pointer"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="2000-5000">$2,000 – $5,000</option>
            <option value="5000-8000">$5,000 – $8,000</option>
            <option value="8000-12000">$8,000 - $12,000</option>
            <option value="12000-plus">$12,000+</option>
            <option value="unsure">Not sure yet, let's discuss</option>
          </select>

          <label className="text-xl mt-7 mb-3">
            Tell us a bit about your piece{" "}
            <span className="text-base font-thin">(required)</span>
          </label>
          <p className="text-sm md:text-base leading-relaxed text-[#555] mb-3">
            Share any and all details for what you have in mind.
            <br />
            Ex: Approx. dimensions | Preferred hardwoods | Ideal timeline | Any
            unique constraints
          </p>
          <textarea
            rows="5"
            className="bg-white rounded-lg p-3 resize-none outline-none border border-transparent focus:border-wood-brown"
            required
          />

          <label className="text-xl mt-7 mb-3">Image Upload</label>
          {fileError && (
            <div className="flex items-center gap-4 bg-[#D7282F] text-white rounded-2xl px-5 py-3 mb-5">
              <span className="flex items-center justify-center shrink-0 border-2 border-white rounded-full w-7 h-7 font-bold text-lg">
                !
              </span>

              <span className="text-base md:text-lg">{fileError}</span>
            </div>
          )}
          <p className="text-sm md:text-base text-[#555] mb-3">
            Feel free to include any inspiration or reference images.
          </p>
          <label className="relative flex flex-col items-center justify-center h-28 rounded-lg border border-dashed border-wood-brown cursor-pointer hover:bg-white/30 transition-colors">
            <input
              type="file"
              accept="image/*"
              multiple
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileSelect}
            />
            <span className="flex items-center justify-center bg-white rounded-full w-8 h-8 text-2xl leading-none mb-1">
              +
            </span>
            <span className="text-lg">Add a File</span>
          </label>

          {files.length > 0 && (
            <div className="flex flex-col gap-2 mt-3">
              {files.map((item, index) => (
                <div
                  key={`${item.file.name}-${item.file.lastModified}-${index}`}
                  className="flex items-center justify-between bg-white rounded-lg px-4 py-3"
                >
                  <span className="text-lg truncate mr-4">
                    {item.file.name}
                  </span>

                  {item.status === "uploading" && (
                    <span className="shrink-0 text-lg">UPLOADING...</span>
                  )}

                  {item.status === "ready" && (
                    <button
                      type="button"
                      onClick={() => {
                        setFiles((currentFiles) =>
                          currentFiles.filter(
                            (_, fileIndex) => fileIndex !== index,
                          ),
                        );
                      }}
                      className="shrink-0 text-lg hover:opacity-60 transition-opacity cursor-pointer"
                    >
                      <span className="text-red-800">REMOVE</span>
                    </button>
                  )}

                  {item.status === "error" && (
                    <button
                      type="button"
                      onClick={() => {
                        setFiles((currentFiles) =>
                          currentFiles.filter(
                            (_, fileIndex) => fileIndex !== index,
                          ),
                        );
                      }}
                      className="shrink-0 text-lg hover:opacity-60 transition-opacity cursor-pointer"
                    >
                      <span className="text-red-800">REMOVE</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="self-start mt-5 bg-wood-brown text-white font-playfair-display text-2xl px-5 py-6 rounded-md hover:opacity-90 transition-opacity cursor-pointer"
          >
            Send My Vision
          </button>
        </form>
      </section>

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
