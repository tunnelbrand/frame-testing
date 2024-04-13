import type {
  FrameMetadataType,
  FrameButtonMetadata,
} from "@coinbase/onchainkit/frame";
import { PUBLIC_URL } from "@/app/config";

export const DIRECTION_FORWARD: string = 'forward';
export const DIRECTION_BACKWARD: string = 'backward';

export interface SlideshowProps {
  name: string;
  slide: number;
  max: number;
  active: boolean;
}

export function Slideshow(props: SlideshowProps, direction: string): FrameMetadataType {
  const { name, max, slide, active } = props;
  // let nextslide = (direction == DIRECTION_BACKWARD) ? slide - 1 : slide + 1
  let nextslide = slide + 1

  let returnToHome = (!active && direction == DIRECTION_BACKWARD)
  // let earlyExit = !inslide && direction == DIRECTION_BACKWARD
  let hideNext = false;
  // let backToHome = (index <= 1);
  if (slide > max) {
    nextslide = max;
    hideNext = true;
  }

  const nextButton: FrameButtonMetadata = {
    label: `Next`,
  }

  const backButton: FrameButtonMetadata = (returnToHome) ? {
    label: 'Back',
    action: 'post',
  } : {
    label: `Back`,
  }

  const navButtons: FrameButtonMetadata[] = [
    // backButton,
    nextButton,
  ];

  const buyButton: FrameButtonMetadata[] = [{
    action: "post_redirect",
    label: "Buy now!",
    target:
      "https://app.uniswap.org/swap?outputCurrency=0xC2fE011C3885277c7F0e7ffd45Ff90cADc8ECD12&chain=base",
  }];

  const buttons = hideNext ? buyButton : buyButton.concat(navButtons);

  const newState: SlideshowProps = {
    name: name,
    slide: nextslide,
    max: max,
    active: true,
  };

  return {
    buttons: buttons as [FrameButtonMetadata, ...FrameButtonMetadata[]],
    image: {
      src: `${PUBLIC_URL}/frames/slideshow/${name}/${slide}.png`,
      aspectRatio: "1:1",
    },
    postUrl: `${PUBLIC_URL}/api/frame`,
    state: newState,
  };
}
