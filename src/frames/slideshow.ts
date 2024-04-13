import { getFrameMetadata, FrameMetadataType } from "@coinbase/onchainkit/frame";
import { PUBLIC_URL } from "@/app/config";

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
        text: "The cutest cat on BASE wears a poncho.",
    },
    postUrl: `${PUBLIC_URL}/api/frame`,
});

export function Slideshow(name : string, index : number): FrameMetadataType {
    return {
        buttons: [
          {
            label: `State`,
          },
          {
            action: "link",
            label: "OnchainKit",
            target: "https://onchainkit.xyz",
          },
          {
            action: "post_redirect",
            label: "Dog pictures",
          },
        ],
        image: {
          src: `${PUBLIC_URL}/frames/slideshow/${name}/${index}.png`,
          aspectRatio: "1:1",
        },
        postUrl: `${PUBLIC_URL}/api/frame`,
        state: {
          page: index + 1,
          time: new Date().toISOString(),
        },
      }
}