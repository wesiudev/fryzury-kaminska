import logo from "../assets/logo-fryzjer-grudziadz-kaminska.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full px-12  flex flex-col items-center justify-between lg:flex-row absolute left-0 top-0 z-[1000]">
      <div className="">
        <Image
          src={logo}
          alt="logo fryzjer grudziadz kaminska"
          width={248}
          height={248}
          className="py-3"
        />
      </div>
      <div className="w-full grid grid-cols-2 lg:flex flex-row justify-end lg:space-x-6 text-lg font-coco font-bold">
        <Link href="#o-mnie" className="relative p-2 group overflow-hidden">
          <div className="absolute left-0 bottom-2 group-hover:scale-105 -translate-x-[20%] h-1/3 w-full duration-150 group-hover:-translate-x-[105%] bg-green-400"></div>{" "}
          <div className="relative z-50 w-max ">O MNIE</div>
        </Link>
        <Link href="#portfolio" className="relative p-2 group overflow-hidden">
          <div className="absolute left-0 bottom-2 group-hover:scale-105 -translate-x-[20%] h-1/3 w-full duration-150 group-hover:-translate-x-[105%] bg-green-400"></div>{" "}
          <div className="relative z-50">PORTFOLIO</div>
        </Link>
        <Link href="#cennik" className="relative p-2 group overflow-hidden">
          <div className="absolute left-0 bottom-2 group-hover:scale-105 -translate-x-[20%] h-1/3 w-full duration-150 group-hover:-translate-x-[105%] bg-green-400"></div>{" "}
          <div className="relative z-50"> CENNIK</div>
        </Link>
        <Link href="#kontakt" className="relative p-2 group overflow-hidden">
          <div className="absolute left-0 bottom-2 group-hover:scale-105 -translate-x-[20%] h-1/3 w-full duration-150 group-hover:-translate-x-[105%] bg-green-400"></div>{" "}
          <div className="relative z-50"> KONTAKT</div>
        </Link>
      </div>
    </div>
  );
}
