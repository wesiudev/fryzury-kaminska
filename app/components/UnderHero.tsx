import avatar from "@/public/assets/fryzjer-grudziadz-kaminska.png";
import Image from "next/image";

export default function UnderHero() {
  return (
    <section
      id="about"
      className="min-h-screen w-screen relative font-coco drop-shadow-md shadow-black px-6 mt-12  lg:px-[7vw] 2xl:px-[12vw]"
    >
      <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="relative">
          <div className="absolute w-full h-full bg-green-500 lg:-left-12 lg:-bottom-12  hidden lg:block"></div>

          <Image
            src={avatar}
            width={1280}
            height={1280}
            alt="Roksana Kamińska Fryzjerka Grudziądz"
            className="mx-auto w-auto h-[90%] lg:h-full relative z-50"
          />
        </div>

        <div className="flex flex-col lg:pl-12 h-full mt-12 lg:mt-0 w-full">
          <h1 className="border-r-[8px] border-l-[8px] lg:border-l-[0px] border-green-500 text-3xl lg:text-5xl w-full text-center px-6 py-6 bg-gray-100 font-bold">
            KIM JESTEM?
          </h1>
          <p className="py-6 text-lg lg:text-3xl leading-relaxed">
            Jestem świeżo upieczoną fryzjerką po ukończeniu szkoły zawodowej.
            Uwielbiam to, co robię, i wkładam w to całe serce. Nie boję się
            nawiązywać kontaktu z klientami i zawsze staram się sprawić, żeby
            wizyty u mnie były przyjemnością.
          </p>
        </div>
      </div>
    </section>
  );
}
