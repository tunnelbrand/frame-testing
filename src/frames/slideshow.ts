import type {
  FrameMetadataType,
  FrameButtonMetadata,
} from "@coinbase/onchainkit/frame";
import { PUBLIC_URL } from "@/app/config";

export interface SlideshowProps {
  name: string;
  index: number;
  max: number;
}

export function Slideshow(props: SlideshowProps): FrameMetadataType {
  const { name, max } = props;
  let { index } = props;

  let hideNext = false;
  if (index + 1 > max) {
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

  const buttons = hideNext ? [buyButton] : navButtons.concat([buyButton]);

  const newState: SlideshowProps = {
    name: name,
    index: index + 1,
    max: max,
  };

  return {
    buttons: buttons as [FrameButtonMetadata, ...FrameButtonMetadata[]],
    image: {
      src: `${PUBLIC_URL}/frames/slideshow/${name}/${index}.png`,
      aspectRatio: "1:1",
    },
    postUrl: `${PUBLIC_URL}/api/frame`,
    state: newState,
  };
}
