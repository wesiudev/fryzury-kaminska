import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="w-full px-3 lg:px-[7vw] 2xl:px-[12vw] font-coco mt-12"
    >
      <h1 className="border-r-[8px] border-l-[8px] border-green-500 text-3xl lg:text-5xl w-full text-center px-6 py-6 bg-gray-100 font-bold mb-6">
        Dane kontaktowe
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-6">
        <Link
          href="tel:+48721417156"
          className="flex flex-row items-center justify-center py-6 bg-green-300 text-3xl"
        >
          <FaPhone className="mr-3 " />
          721417156
        </Link>
        <Link
          href="mailto:kaminskaroksana471@gmail.com"
          className="flex flex-row items-center justify-center py-6 bg-blue-300 lg:text-2xl"
        >
          <FaEnvelope className="mr-3 " />
          kaminskaroksana471@gmail.com
        </Link>
      </div>
    </section>
  );
}
