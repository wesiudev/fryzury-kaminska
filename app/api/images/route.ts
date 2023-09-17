import { getImages } from "@/firebase";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const images = getImages("fryzurykaminska");
  return NextResponse.json(images);
}
