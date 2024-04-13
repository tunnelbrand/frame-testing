import {
  FrameRequest,
  getFrameMessage,
  getFrameHtmlResponse,
} from "@coinbase/onchainkit/frame";
import { NextRequest, NextResponse } from "next/server";
import { Slideshow } from "@/frames/slideshow";

export async function POST(req: NextRequest): Promise<Response> {
  const body: FrameRequest = await req.json();

  // Method isn't input safe, without json fails
  const { isValid, message } = await getFrameMessage(body, {
    neynarApiKey: "NEYNAR_ONCHAIN_KIT",
    // https://github.com/coinbase/onchainkit/issues/236
    allowFramegear: true,
  });

  if (!isValid) {
    return new NextResponse("Message not valid", { status: 500 });
  }

  let state = {
    page: 1,
    slideshow: "default",
    max: 4,
  };
  try {
    state = JSON.parse(decodeURIComponent(message.state?.serialized));
  } catch (e) {
    console.error(e);
  }

  return new NextResponse(
    getFrameHtmlResponse(Slideshow(state.slideshow, state.page, state.max)),
  );
}

export const dynamic = "force-dynamic";
