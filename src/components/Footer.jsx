import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#544635] text-[#EDE8D8] items-center py-10 h-auto gap-5">
      <h1 className="text-3xl md:text-5xl font-playfair text-center">
        THE WOODLARK'S NEST
      </h1>
      <div className="flex flex-col text-center text-xl font-stretch-110% font-extralight underline-offset-2">
        <a href="mailto:jesus@thewoodlarksnest.com" className="underline">
          jesus@thewoodlarksnest.com
        </a>
        <a href="tel:+9013000949" className="underline">
          (901) 300-0949
        </a>
      </div>
      <div className="flex gap-3 text-3xl">
        <FaFacebookF />
        <FaInstagram />
        <MdMailOutline />
      </div>
    </footer>
  );
}
