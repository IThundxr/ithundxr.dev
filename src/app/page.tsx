import Image from "next/image";
import { GithubIcon } from "lucide-react";

import bluesky_icon from "@/assets/bluesky.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <section id="about" className="max-w-2xl">
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-end">
          <div className="order-2 sm:order-1">
            <a
              href="https://github.com/ithundxr"
              aria-label="Link to GitHub Profile"
              className="hover:border-elementBorderHover active:border-elementBorderHover relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-elementBorder bg-element shadow-md shadow-shadow transition-all duration-75 hover:-translate-y-0.5 hover:bg-elementHover hover:shadow-lg hover:shadow-shadow active:translate-y-0 active:bg-elementHover active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] sm:left-6"
            >
              <GithubIcon className="h-[24px] w-[24px]" />
            </a>
          </div>
          <div
            className={`pointer-events-none relative order-1 flex h-[224px] w-[224px] items-center justify-center rounded-full bg-element sm:order-2`}
          >
            <Image
              src="/ithundxr.webp"
              alt="Profile Picture"
              width={200}
              height={200}
              className="img-inert rounded-full"
              priority
            />
          </div>
          <div className="order-3">
            <a
              href="https://bsky.app/profile/ithundxr.dev"
              aria-label="Link to Bluesky Profile"
              className="hover:border-elementBorderHover active:border-elementBorderHover relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-elementBorder bg-element shadow-md shadow-shadow transition-all duration-75 hover:-translate-y-0.5 hover:bg-elementHover hover:shadow-lg hover:shadow-shadow active:translate-y-0 active:bg-elementHover active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] sm:right-6"
            >
              <Image
                src={bluesky_icon}
                alt="Bluesky"
                width={24}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <h1 className="text-4xl font-bold">IThundxr</h1>
        <h2 className="mb-4 text-2xl text-[0.9em] font-normal uppercase tracking-wider text-secondary">
          Java, Rust and Typescript Developer
        </h2>
        <Link
          href="/projects"
          className="perspective-1000 preserve-3d inline-block rounded-full bg-elementAccent px-8 py-3 text-lg font-medium shadow-lg transition-all duration-150 ease-out will-change-transform hover:scale-[1.02] hover:bg-elementAccentHover hover:shadow-xl active:translate-y-0.5 active:scale-95 active:bg-elementAccentHover"
        >
          Browse My Projects
        </Link>
      </section>
    </div>
  );
}
