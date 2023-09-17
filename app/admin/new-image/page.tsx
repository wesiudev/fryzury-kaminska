/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
var randomId = require("random-id");
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addImage, getImages, storage } from "../../../firebase/index";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export default function Page() {
  const images = getImages("fryzurykaminska");
  console.log(images);

  const [chosenImg, setChosenImg] = useState<any>();
  const [imgAlt, setImgAlt] = useState("");
  function uploadImage() {
    const imageRef = ref(storage, `image-${randomId(20, "aA0")}`);
    uploadBytes(imageRef, chosenImg).then(() =>
      getDownloadURL(imageRef).then((url) => {
        const req = { src: url, alt: imgAlt };
        addImage("fryzurykaminska", req);
      })
    );
  }

  return (
    <div className="relative">
      <Link
        href="/admin"
        className="w-full text-center bg-gray-500 text-white text-3xl py-6 flex items-center pl-3"
      >
        <FaArrowLeft className="mr-2" />
        Powrót
      </Link>
      <input
        className="w-full h-24 relative before:left-0 top-0 before:absolute before:h-full before:w-full before:bg-purple-500 before:text-white before:text-3xl before:text-center before:flex before:items-center before:justify-center  before:content-['DODAJ_ZDJĘCIE']"
        type="file"
        accept="image/*"
        onChange={(event: any) => {
          setChosenImg(event.target.files[0]);
        }}
      />

      <div
        className={`flex flex-col lg:flex-row items-center justify-center p-6 bg-black w-full h-screen fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] duration-500 ${
          chosenImg ? "scale-100 bg-opacity-50" : "scale-0 bg-opacity-0"
        }`}
      >
        <Image
          src={chosenImg ? URL.createObjectURL(chosenImg) : ""}
          width={1024}
          height={1024}
          alt=""
          className="h-3/4 w-auto max-w-screen lg:max-w-[80vw]"
        />
        <div className="h-max lg:h-3/4 lg:px-3">
          <input
            type="text"
            value={imgAlt}
            onChange={(e: any) => setImgAlt(e.target.value)}
            placeholder="Opisz obrazek (krótko)"
            required
            className="p-2 w-full my-3"
          />
          <button
            onClick={() => {
              setChosenImg(""), setImgAlt(""), uploadImage();
            }}
            className="w-full lg:[w-300px] bg-green-500 hover:bg-green-400 p-3 duration-200 text-white text-2xl "
          >
            DODAJ
          </button>
          <button
            onClick={() => {
              setChosenImg(""), setImgAlt("");
            }}
            className="w-full lg:[w-300px] bg-red-500 hover:bg-red-400 p-3 duration-200 text-white text-2xl mt-3"
          >
            ODRZUĆ
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          console.log(images);
        }}
        className="w-full lg:[w-300px] bg-red-500 hover:bg-red-400 p-3 duration-200 text-white text-2xl mt-3"
      >
        ODRZUĆ
      </button>
      <div className="columns-2 h-screen">
        {/* {images.images.map((image: any, i: any) => (
          <div key={i}>
            <img src={image.src} alt="" />
          </div>
        ))} */}
      </div>
    </div>
  );
}
