import Image from "next/image";
import heroImage from "@/assets/kaminska-grudziadz-fryzjer-hero.jpg";
export default function Hero() {
  return (
    <div className="w-screen min-h-[110vh] flex items-center justify-center lg:justify-between px-3 lg:px-[7vw] 2xl:px-[12vw] drop-shadow-md shadow-black">
      <div className="absolute -bottom-12 left-0 lg:block hidden h-[50vh] bg-green-400 w-1/2  opacity-40 rounded-tr-full"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-4xl lg:text-5xl font-coco relative z-50">
        <div className="relative p-3 text-center lg:text-left flex flex-col h-full z-50">
          <div className="flex flex-col ">
            <div className="relative z-50 font-bold my-auto  bg-gray-100 p-6 lg:pl-12 border-l-[12px] border-green-500 mt-56 lg:mt-24 xl:mt-36">
              Umów się dziś i zadbaj o swoje włosy!
            </div>
            <button className="w-max mx-auto lg:mx-0 py-3 px-24 bg-green-500 mt-12 lg:mt-24 relative group rounded-md text-xl">
              <div className="absolute w-full h-full p-3 border-[1px] rounded-md border-black -bottom-4 -left-4 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"></div>
              Kontakt
            </button>
          </div>
        </div>
        <div className="flex items-center lg:justify-end h-full mt-12 lg:mt-0">
          <div className="w-max lg:h-3/4 flex items-center lg:justify-end relative">
            <div className="hidden lg:block absolute -bottom-36 -right-36 w-72 h-72 bg-green-400 opacity-20 rounded-full z-10"></div>
            <Image
              src={heroImage}
              alt="kaminska grudziadz hero imagze"
              width={1080}
              height={1920}
              className="lg:rounded-2xl h-full w-auto px-3 lg:px-0 relative z-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
