"use client";
import Link from "next/link";
var randomId = require("random-id");
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addImage, deleteImage, storage } from "../../../firebase/index";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
export default function UploadImage({ images }: any) {
  const [chosenImg, setChosenImg] = useState<any>();
  const [imgAlt, setImgAlt] = useState("");
  const [justAdded, setJustAdded] = useState<any[]>([]);
  const [startDelete, setStartDelete] = useState("");
  const [justDeleted, setJustDeleted] = useState<any[]>([]);
  const [showMessage, setShowMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  function uploadImage() {
    setLoading(true);
    const randId = `image-${randomId(20, "aA0")}`;
    const imageRef = ref(storage, randId);
    setJustAdded((oldArray) => [...oldArray, chosenImg]);
    uploadBytes(imageRef, chosenImg).then(() =>
      getDownloadURL(imageRef)
        .then((url) => {
          const req = { src: url, alt: imgAlt, id: randId };
          addImage("fryzurykaminska", req);
        })
        .then(() => setLoading(false))
    );
  }
  return (
    <div className="relative">
      {showMessage === "deleted" && (
        <div className="w-max h-max absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-rose-400 text-white text-2xl p-3 ronded-md ">
          usunięto
        </div>
      )}
      {showMessage === "added" && (
        <div className="w-max h-max absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-green-400 text-white text-2xl p-3 ronded-md ">
          dodano
        </div>
      )}{" "}
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
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 5000);
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
          className={`${
            isLoading ? "blur-sm" : "blur-none"
          } duration-500 h-3/4 w-auto max-w-screen lg:max-w-[80vw]`}
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
            disabled={isLoading}
            onClick={() => {
              uploadImage(), setChosenImg(""), setImgAlt("");
              setShowMessage("dodano");
              setTimeout(() => {
                setShowMessage("");
              }, 3000);
            }}
            className="w-full lg:[w-300px] bg-green-500 hover:bg-green-400 p-3 duration-200 text-white text-2xl disabled:cursor-not-allowed disabled:bg-green-200"
          >
            {isLoading ? "ŁADOWANIE" : "DODAJ"}
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
      <h1 className="py-3 bg-blue-300 text-3xl text-white px-3">
        Wszystkie zdjęcia
      </h1>
      <div className="flex flex-row flex-wrap h-max bg-rose-200">
        {images.images.length > 0 &&
          images.images.map((image: any, i: any) => (
            <div
              className={`flex flex-col relative h-max ${
                justDeleted.includes(image.id) ? "hidden" : "block"
              }`}
              key={i}
            >
              {startDelete === image.id && (
                <div className="bg-white w-full h-full z-[60] absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-center text-xl flex flex-col justify-center">
                  usunąć?
                  <div className="flex flex-row w-full">
                    <button
                      onClick={() => {
                        deleteImage("fryzurykaminska", image),
                          setStartDelete(""),
                          setJustDeleted((oldArray) => [
                            ...oldArray!,
                            image.id,
                          ]);
                        setShowMessage("deleted");
                        setTimeout(() => {
                          setShowMessage("");
                        }, 3000);
                      }}
                      className="bg-red-500 p-3 w-full"
                    >
                      usuń
                    </button>
                    <button
                      onClick={() => setStartDelete("")}
                      className="bg-green-500 p-3 w-full"
                    >
                      nie
                    </button>
                  </div>
                </div>
              )}
              <Image
                className={`max-h-[300px] w-auto space-x-3 bg-gray-300 `}
                width={1024}
                height={1024}
                src={image.src}
                alt=""
                key={i}
              />
              <button
                onClick={() => setStartDelete(image.id)}
                className="w-3/4 bg-opacity-75 hover:bg-opacity-100 duration-200 absolute bottom-3 left-[50%] -translate-x-[50%] z-50 py-3 text-white font-bold text-xl bg-red-500 hover:bg-red-400 rounded-md"
              >
                usuń
              </button>
            </div>
          ))}
        {justAdded.length > 0 &&
          justAdded.map((image: any, i: any) => (
            <Image
              key={i}
              className={`max-h-[300px] w-auto space-x-3 bg-gray-300 `}
              width={1024}
              height={1024}
              src={URL.createObjectURL(image)}
              alt=""
            />
          ))}
      </div>
    </div>
  );
}
