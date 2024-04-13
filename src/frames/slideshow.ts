import {
  FrameMetadataType,
  FrameButtonMetadata,
} from "@coinbase/onchainkit/frame";
import { PUBLIC_URL } from "@/app/config";

export function Slideshow(
  name: any,
  index: number,
  max: number,
): FrameMetadataType {
  let hideNext = false;
  if (index+1 > max) {
    index = max;
    hideNext = true;
  }

  const navButtons: FrameButtonMetadata[] = [
    {
      label: `Back`,
    },
    {
      label: `Next`,
    },
  ];

  const buyButton: FrameButtonMetadata = {
    action: "post_redirect",
    label: "Buy now!",
    target:
      "https://app.uniswap.org/swap?outputCurrency=0xC2fE011C3885277c7F0e7ffd45Ff90cADc8ECD12&chain=base",
  };

  const buttons = hideNext
    ? [buyButton]
    : navButtons.concat([buyButton]);

  return {
    buttons: buttons,
    image: {
      src: `${PUBLIC_URL}/frames/slideshow/${name}/${index}.png`,
      aspectRatio: "1:1",
    },
    postUrl: `${PUBLIC_URL}/api/frame`,
    state: {
      page: index + 1,
      slideshow: name,
      max: max,
    },
  };
}
