/* eslint-disable @next/next/no-img-element */
export default function Clients({ images }: any) {
  return (
    <section
      id="portfolio"
      className="w-full px-3 lg:px-[7vw] 2xl:px-[12vw] font-coco -mt-12"
    >
      <h1 className="border-r-[8px] border-l-[8px] border-green-500 text-3xl lg:text-5xl w-full text-center px-6 py-6 bg-gray-100 font-bold mb-6">
        Dołącz do zadowolonych klientek!
      </h1>
      <div className="columns-2 lg:columns-3">
        {images.images.map((image: any, i: any) => (
          <div key={i}>
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
