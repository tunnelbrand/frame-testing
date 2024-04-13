import { getFrameMetadata } from "@coinbase/onchainkit/frame";
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
        text: "The cutest cat on BASE",
    },
    postUrl: `${PUBLIC_URL}/api/frame`,
});
