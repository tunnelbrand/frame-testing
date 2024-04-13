import {
  FrameRequest,
  getFrameMessage,
  getFrameHtmlResponse,
} from "@coinbase/onchainkit/frame";
import { NextRequest, NextResponse } from "next/server";
import { Slideshow } from "@/frames/slideshow";

export async function POST(req: NextRequest): Promise<Response> {
  // const body: FrameRequest = await req.json();

  return new NextResponse(
    getFrameHtmlResponse(Slideshow("default", 0)),
  );
}

export const dynamic = "force-dynamic";
