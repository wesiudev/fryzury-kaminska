import avatar from "@/assets/kaminska-grudziadz-fryzjer-grid-3.jpg";
import Image from "next/image";

export default function Services() {
  return (
    <section className="min-h-screen w-screen relative font-coco drop-shadow-md shadow-black px-6 mt-12  lg:px-[7vw] 2xl:px-[12vw]">
      <div className="absolute -top-24 right-0 lg:block hidden h-5 bg-green-400 w-1/2 lg:w-1/4 -mt-36 opacity-40 rounded-l-full"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col lg:pr-12 h-full mt-12 lg:mt-0 w-full relative">
          <h1 className="border-l-[8px] border-r-[8px] lg:border-r-[0px] border-green-500 text-5xl w-full text-center px-6 py-6 bg-gray-100 font-bold">
            OFEROWANE USŁUGI
          </h1>
          <div className="flex flex-col items-start justify-start mt-12 space-y-12">
            <div className="flex flex-col text-center w-full relative">
              <div className="absolute left-3 lg:-left-3 top-[50%] -translate-y-[50%] bg-green-500 h-6 w-6 rounded-full"></div>
              <h1 className="font-bold text-5xl">Strzyżenie</h1>
              <h2 className="font-normal italic mt-4 text-2xl">
                męskie i damskie
              </h2>
            </div>
            <div className="flex flex-col text-center w-full relative">
              <div className="absolute left-3 lg:-left-3 top-[50%] -translate-y-[50%] bg-green-500 h-6 w-6 rounded-full"></div>
              <h1 className="font-bold text-5xl">Koloryzacja</h1>
              <h2 className="font-normal italic mt-4 text-2xl px-12">
                jednolity kolor, pasemka, sombre, ombre, balleyage
              </h2>
            </div>
            <div className="flex flex-col text-center w-full relative">
              <div className="absolute left-3 lg:-left-3 top-[50%] -translate-y-[50%] bg-green-500 h-6 w-6 rounded-full"></div>
              <h1 className="font-bold text-5xl">Dodatkowe</h1>
              <h2 className="font-normal italic mt-4 text-2xl">
                Ułożenia, czesanie, upięcia
              </h2>
            </div>
          </div>
          <button className="w-max mx-auto py-3 px-24 bg-green-500 mt-12 lg:mt-24 relative group rounded-md text-xl bottom-0">
            <div className="absolute w-full h-full p-3 border-[1px] rounded-md border-black -bottom-4 -left-4 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"></div>
            Kontakt
          </button>
        </div>
        <div className="relative flex justify-center h-3/4 w-full lg:w-max mx-auto">
          <div className="absolute w-full h-full bg-gray-500 lg:-right-12 lg:-top-12 bg-opacity-20 hidden lg:block"></div>
          <div className="w-full mt-12 lg:mt-0 bg-gray-500 lg:bg-green-500 bg-opacity-20 relative z-50">
            <Image
              src={avatar}
              width={1024}
              height={1024}
              alt="Roksana Kamińska Fryzjerka Grudziądz"
              className="mx-auto w-auto h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
