import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import { PUBLIC_URL } from "@/app/config";
import type {
  FrameMetadataType,
} from "@coinbase/onchainkit/frame";


export const HomeFrameMetadata : FrameMetadataType = {
  buttons: [
    {
      label: "Interested?",
    },
  ],
  image: {
    src: `${PUBLIC_URL}/frames/images/poncho.png`,
    aspectRatio: "1:1",
  },
  input: {
    text: "The cutest cat on BASE",
  },
  postUrl: `${PUBLIC_URL}/api/frame`,
}

export const HomeMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Interested?",
    },
  ],
  image: {
    src: `${PUBLIC_URL}/frames/images/poncho.png`,
    aspectRatio: "1:1",
  },
  input: {
    text: "The cutest cat on BASE",
  },
  postUrl: `${PUBLIC_URL}/api/frame`,
});
