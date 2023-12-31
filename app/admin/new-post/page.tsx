"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaLink, FaPlus } from "react-icons/fa";
import * as Scroll from "react-scroll";
// import { addBlogPost } from "@/firebase/index";

export default function NewPost() {
  const [input, setInput] = useState({
    title: "",
    sections: [],
    intro: "",
    outro: "",
    tags: [],
    url: "",
  });
  const [sectionInput, setSectionInput] = useState("");
  const [sectionContent, setSectionContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const addSection = (value: string) => {
    setInput((prevInput: any) => ({
      ...prevInput,
      sections: [
        ...prevInput.sections,
        { title: value, content: sectionContent },
      ],
    }));
  };
  const addTag = () => {
    setInput((prevInput: any) => ({
      ...prevInput,
      tags: [...prevInput.tags, { name: tagInput }],
    }));
    console.log(input.tags);
  };

  const handleMarkdownChange = (event: any) => {
    setSectionContent(event.target.value);
  };

  const renderMarkdown = (text: string) => {
    return { __html: parseMarkdown(text) };
  };

  const parseMarkdown = (input: any) => {
    // Basic Markdown parsing logic
    const lines = input.split("\n");
    const parsedLines = lines.map((line: any) => {
      // Parse headings
      if (line.startsWith("# ")) {
        const level = line.lastIndexOf("#") + 1;
        const text = line.substring(level + 1);
        return `<h${level} class="text-3xl">${text}</h${level}>`;
      }
      // Parse image syntax ![alt text](image-url)""
      const imageMatch = line.match(/!\[([^\]]+)\]\(([^)]+)\)/);
      if (imageMatch) {
        const altText = imageMatch[1];
        const imageUrl = imageMatch[2];
        return `<img class="mx-auto max-w-full flex flex-col" src="${imageUrl}" alt="${altText}" /><a class="opacity-50" href="${imageUrl}">Źródło: ${altText}</a>`;
      }
      // Parse link syntax [link text](link-url)
      const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const linkUrl = linkMatch[2];
        return `<a href="${linkUrl}">${linkText}</a>`;
      }
      // Parse lists
      const match = line.match(/^(\d+\.) (.+)/);
      if (match) {
        const number = match[1];
        const text = match[2];
        return `<div class="text-xl ml-6 mt-2">${number} ${text}</div>`;
      }

      // Parse paragraphs
      return `<p>${line}</p>`;
    });

    return parsedLines.join("\n");
  };
  function polishToEnglish(sentence: string): string {
    const translationDict: { [key: string]: string } = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ś: "s",
      ó: "o",
      ż: "ż",
      ź: "ź",
      // Add more translation mappings as needed
    };

    const sanitizedSentence = sentence
      .replace(
        /[ąćęłńśóżź]/gi,
        (matched) => translationDict[matched.toLowerCase()] || ""
      )
      .replace(/\s/g, "-")
      .replace(/[^\w\s-]/g, "")
      .toLowerCase();

    return sanitizedSentence;
  }
  let ScrollTo = Scroll.Link;
  return (
    <div className="relative">
      {messageVisible && (
        <div
          className={`bg-green-500 text-white text-3xl w-screen lg:w-max h-max p-12 fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] flex items-center justify-center`}
        >
          Twój link do posta to: /{polishToEnglish(input.title)}
        </div>
      )}
      <Link
        href="/admin"
        className="bg-gray-500 text-3xl lg:text-5xl w-full py-3 px-3 flex flex-row items-center text-white"
      >
        <FaArrowLeft className="mr-3" /> Powrót
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col ">
          <h1 className="w-full py-6 px-3 text-center text-3xl lg:text-5xl bg-rose-500 text-white font-bold">
            KREATOR
          </h1>
          <div className="grid grid-cols-1 bg-white text-black text-lg h-max">
            <div className="p-2 lg:p-6 flex flex-row items-center bg-blue-500">
              <h1 className="border-r-2 border-white h-full p-2 lg:p-6 text-white w-1/4">
                TYTUŁ POSTA
              </h1>
              <input
                value={input.title}
                onChange={(e) => setInput({ ...input, title: e.target.value })}
                className="bg-blue-500 text-white ml-3 w-full h-full border-2 border-white px-3"
                type="text"
              />
            </div>
            <div className="p-2 lg:p-6 flex flex-row items-center bg-blue-500">
              <h1 className="border-r-2 border-white h-full p-2 lg:p-6 text-white w-1/4">
                WSTĘP
              </h1>
              <input
                value={input.intro}
                onChange={(e) => setInput({ ...input, intro: e.target.value })}
                className="bg-blue-500 text-white ml-3 w-full h-full border-2 border-white px-3"
                type="text"
              />
            </div>

            <div className="p-2 lg:p-6 flex flex-col items-center bg-orange-500">
              <div className="flex flex-col w-full">
                <div className="flex flex-row">
                  <h1 className="border-r-2 border-white h-full p-2 lg:p-6 text-white w-1/4">
                    SEKCJA
                  </h1>
                  <input
                    value={sectionInput}
                    onChange={(e) => setSectionInput(e.target.value)}
                    className="bg-black text-white ml-3 w-full h-full border-2 border-white px-3"
                    type="text"
                  />
                </div>
                <div className="flex flex-row mt-3">
                  <h1 className="border-r-2 border-white h-full p-2 lg:p-6 text-white w-1/4">
                    TREŚĆ
                  </h1>
                  <textarea
                    className="bg-black text-white ml-3 w-full h-full border-2 border-white p-3"
                    placeholder="Wpisz treść sekcji..."
                    value={sectionContent}
                    onChange={handleMarkdownChange}
                  />
                </div>
              </div>
              <br />
              <button
                value={sectionInput}
                onClick={(e: any) => {
                  addSection(e.target.value), setSectionInput("");
                }}
                className="w-full bg-green-500 text-white font-bold text-3xl"
              >
                DODAJ SEKCJĘ
              </button>
            </div>
          </div>
          <div className="p-2 lg:p-6 flex flex-row items-center bg-purple-500">
            <h1 className="border-r-2 border-white h-full p-2 lg:p-6 text-white min-w-1/4">
              ZAKOŃCZENIE
            </h1>
            <input
              value={input.outro}
              onChange={(e) => setInput({ ...input, outro: e.target.value })}
              className="bg-purple-500 text-white ml-3 w-full h-full border-2 border-white px-3"
              type="text"
            />
          </div>
          <div className="p-6 flex flex-col items-center bg-rose-500">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <h1 className="border-r-2 border-white h-full p-2 lg:p-6 text-white w-1/4">
                  TAGI
                </h1>
                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="bg-black text-white ml-3 w-full h-full border-2 border-white px-3"
                  type="text"
                />
              </div>
            </div>
            <br />
            <button
              value={sectionInput}
              onClick={() => {
                addTag(), setTagInput("");
              }}
              className="w-full bg-green-500 text-white font-bold text-3xl"
            >
              DODAJ TAG
            </button>
          </div>

          {!input.url && (
            <button
              onClick={() => {
                setInput({ ...input, url: polishToEnglish(input.title) }),
                  setMessageVisible(true);
                setTimeout(() => {
                  setMessageVisible(false);
                }, 3000);
              }}
              className="py-6 bg-green-500 text-2xl text-white hover:bg-green-400 duration-200"
            >
              UTWÓRZ LINK
            </button>
          )}
          {input.url !== "" && (
            <button
              onClick={() => {
                alert("twoja strona nie posiada bloga!");
              }}
              className="py-6 bg-green-500 text-2xl text-white hover:bg-green-400 duration-200"
            >
              OPUBLIKUJ
            </button>
          )}
        </div>
        <div className="flex flex-col prose lg:prose-xl">
          <h1 className="w-full py-6 px-3 text-center text-3xl lg:text-5xl bg-purple-500 text-white">
            PODGLĄD
          </h1>
          <div className="flex flex-col p-12">
            <h1 className="leading-relaxed font-bold">{input.title}</h1>
            <h3 className="italic  leading-relaxed font-italic font-light">
              {input.intro}
            </h3>
            {input.sections.length > 0 && (
              <p className="">W tym poście przeczytasz o:</p>
            )}
            <div className="flex flex-col ml-6">
              {input.sections.map((section: any, idx) => (
                <h4 key={idx} className="relative h-12">
                  <ScrollTo
                    className=" text-blue-400 flex flex-row items-center cursor-pointer hover:bg-gray-100 duration-150 absolute left-0 top-0 z-20 h-full w-full"
                    activeClass="active"
                    to={`${polishToEnglish(section.title)}`}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <FaLink className="text-gray-500 mr-2 min-w-[25px]" />{" "}
                    {section.title}
                  </ScrollTo>
                </h4>
              ))}
            </div>

            {input.sections.map((section: any, idx) => (
              <div id={`${polishToEnglish(section.title)}`} key={idx}>
                <h3 key={idx} className="font-bold">
                  {section.title}
                </h3>

                <div
                  dangerouslySetInnerHTML={renderMarkdown(section.content)}
                />
              </div>
            ))}
            <h3 className="italic  leading-relaxed font-italic font-light">
              {input.outro}
            </h3>
            <div className="flex flex-row space-x-6 flex-wrap">
              {input.tags.map((tag: any, i) => (
                <Link href={`/blog/?tag=${tag.name}`} key={i}>
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
