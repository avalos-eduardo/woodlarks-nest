import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#544635] text-[#EDE8D8] items-center py-10 h-auto gap-6">
      <h1 className="text-3xl md:text-5xl font-playfair-display text-center">
        THE WOODLARK'S NEST
      </h1>
      <div className="flex flex-col text-center text-md md:text-xl font-lato font-light underline-offset-2">
        <a href="mailto:jesus@thewoodlarksnest.com" className="underline">
          jesus@thewoodlarksnest.com
        </a>
        <a href="tel:+9013000949" className="underline">
          (901) 300-0949
        </a>
      </div>
      <div className="flex gap-3 text-xl md:text-3xl">
        <a href="https://www.facebook.com/thewoodlarksnest/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/thewoodlarksnest">
          <FaInstagram />
        </a>
        <a href="mailto:jesus@thewoodlarksnest.com">
          <MdMailOutline />
        </a>
      </div>
    </footer>
  );
}
