import type { FrameRequest } from "@coinbase/onchainkit/frame";
import {
  getFrameMessage,
  getFrameHtmlResponse,
} from "@coinbase/onchainkit/frame";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  Slideshow,
  DIRECTION_FORWARD,
  DIRECTION_BACKWARD,
} from "@/frames/slideshow";
import type { SlideshowProps } from "@/frames/slideshow";
import { HomeFrameMetadata } from "~/frames/home";

const BACK_BUTTON = 1;

export async function POST(req: NextRequest): Promise<Response> {
  const body: FrameRequest = (await req.json()) as FrameRequest;

  // Method isn't input safe, without json fails
  const { isValid, message } = await getFrameMessage(body, {
    neynarApiKey: "NEYNAR_ONCHAIN_KIT",
    // https://github.com/coinbase/onchainkit/issues/236
    allowFramegear: true,
  });

  if (!isValid) {
    return new NextResponse("Message not valid", { status: 400 });
  }

  let props: SlideshowProps = {
    name: "default",
    slide: 1,
    max: 4,
    active: false,
  };
  try {
    props = JSON.parse(
      decodeURIComponent(message.state?.serialized),
    ) as SlideshowProps;
  } catch (e) {}

  console.log(message);
  const direction = DIRECTION_FORWARD;
  if (message?.button === BACK_BUTTON && props.active) {
    return new NextResponse(getFrameHtmlResponse(HomeFrameMetadata));
  }

  return new NextResponse(getFrameHtmlResponse(Slideshow(props, direction)));
}

export const dynamic = "force-dynamic";
