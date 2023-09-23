import { getImages } from "../../../firebase/index";

import UploadImage from "./UploadImage";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/images`);
  const data = await res.json();
}
export default async function Page() {
  const images = await getData();
  return (
    <div className="relative">
      <UploadImage images={images} />
    </div>
  );
}
