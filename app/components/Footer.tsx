import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import logo from "@/assets/logo-fryzjer-grudziadz-kaminska.png";
export default function Footer() {
  return (
    <div className="bg-green-500 bg-opacity-20 flex items-center justify-center py-12 lg:mx-[7vw] 2xl:mx-[12vw] mt-12 font-coco">
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full">
        <Image
          src={logo}
          alt="logo fryzjer grudziadz kaminska"
          width={248}
          height={248}
          className="py-3 mx-auto"
        />
        <Link
          className="flex flex-row items-center hover:bg-gray-100 w-max p-3 mx-auto"
          href="/"
        >
          www.fryzurykaminska.pl
        </Link>
        <Link
          href="https://www.facebook.com/roksana.kaminska.1481"
          className="flex flex-row items-center hover:bg-gray-100 w-max p-3 mx-auto"
        >
          <FaFacebook className="text-blue-400 text-4xl mr-2" />{" "}
          <span>
            /roksana.kaminska.<span className="font-bold">1481</span>{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}
