import Image from "next/image";
import grid1 from "@/assets/kaminska-grudziadz-fryzjer-grid1.jpg";
import grid2 from "@/assets/kaminska-grudziadz-fryzjer-grid2.jpg";
import grid3 from "@/assets/kaminska-grudziadz-fryzjer-grid3.jpg";
import grid4 from "@/assets/kaminska-grudziadz-fryzjer-grid4.jpg";
import grid5 from "@/assets/kaminska-grudziadz-fryzjer-grid5.jpg";
import grid6 from "@/assets/kaminska-grudziadz-fryzjer-grid6.jpg";
export default function Clients() {
  return (
    <div className="w-full px-3 lg:px-[7vw] 2xl:px-[12vw] font-coco -mt-24">
      <h1 className="border-r-[8px] border-l-[8px] border-green-500 text-5xl w-full text-center px-6 py-6 bg-gray-100 font-bold mb-6">
        Dołącz do zadowolonych klientek!
      </h1>
      <div className="columns-2 space-y-4">
        <Image
          src={grid1}
          width={1024}
          height={1024}
          alt="Roksana Kaminska Grudziądz Fryzjerka Grid-1"
          className=""
        />
        <Image
          src={grid2}
          width={1024}
          height={1024}
          alt="Roksana Kaminska Grudziądz Fryzjerka Grid-2"
          className=""
        />
        <Image
          src={grid3}
          width={1024}
          height={1024}
          alt="Roksana Kaminska Grudziądz Fryzjerka Grid-3"
          className=""
        />
        <Image
          src={grid4}
          width={1024}
          height={1024}
          alt="Roksana Kaminska Grudziądz Fryzjerka Grid-4"
          className=""
        />
        <Image
          src={grid5}
          width={1024}
          height={1024}
          alt="Roksana Kaminska Grudziądz Fryzjerka Grid-5"
          className=""
        />
        <Image
          src={grid6}
          width={1024}
          height={1024}
          alt="Roksana Kaminska Grudziądz Fryzjerka Grid-6"
          className=""
        />
      </div>
    </div>
  );
}
