import { addImage, getImages, storage } from "../../../firebase/index";

import UploadImage from "./UploadImage";

export default async function Page() {
  const images = await getImages("fryzurykaminska");
  return (
    <div className="relative">
      <UploadImage images={images} />
    </div>
  );
}
