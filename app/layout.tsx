import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FryzuryKaminska.pl - Roksana Kamińska - Usługi fryzjerskie",
  description:
    "Usługi fryzjerskie na terenie Grudziądza. Fryzjer Grudziądz, strzyżenie męskie, strzyżenie żeńskie.",
  themeColor: "#5eee73",
  publisher: "quixy.pl",
  manifest: "/manifest.json",
  icons: {
    icon: "favicon.png",
  },
};
export const dynamic = "force-dynamic";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${cocosharp.variable}
     w-full overflow-x-hidden bg-white`}
      >
        {" "}
        {children}
      </body>
    </html>
  );
}
const cocosharp = localFont({
  src: [
    {
      path: "../public/fonts/Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cocosharp",
});
