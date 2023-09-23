import { NextResponse, NextRequest } from "next/server";
import { getImages } from "@/firebase";

export async function GET(req: NextRequest) {
  const images = await getImages("fryzurykaminska");
  return NextResponse.json(images);
}
