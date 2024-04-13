import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';
import { HomeMetadata } from "@/frames/home"
import { PUBLIC_URL } from "@/app/config";

export const metadata: Metadata = {
  metadataBase: new URL(`https://{PUBLIC_URL}`),
  title: `Poncho`,
  description: 'The cutest cat on BASE',
  openGraph: {
    title: `${PUBLIC_URL}`,
    description: 'The cutest cat on BASE',
    images: [`${PUBLIC_URL}/images/poncho.png`],
  },
  other: {
    ...HomeMetadata,
  },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffffcc] to-[#ffffcc] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-[#ff9900] hover:bg-white/20"
          href="https://www.ponchobase.com/"
          target="_blank"
        >
          <Image
            src="/images/brand.png"
            width={924}
            height={291}
            alt="branding"
          />
        </Link>
        <h1 className="text-5xl font-extrabold tracking-tight text-[#ff9900] sm:text-[5rem]">
          Frame <span className="text-[#9933cc]">Testing</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-[#ff9900] hover:bg-white/20"
          href="https://create.t3.gg/en/usage/first-steps"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">First Steps →</h3>
          <div className="text-lg">
            Vivamus a neque id turpis malesuada auctor nec quis tellus. Integer
            nec rutrum mauris
          </div>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-[#ff9900] hover:bg-white/20"
          href="https://create.t3.gg/en/introduction"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">Documentation →</h3>
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut leo
            diam, vulputate ac elit eget, mattis vehicula metus.
          </div>
        </Link>
      </div>
    </main>
  );
}
