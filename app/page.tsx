import Image from "next/image";
import { Poppins } from "next/font/google";
import seasonsConfig from "@/constants/seasons.config";
import MainText from "@/components/units/MainText";
import FooterLink from "@/components/units/FooterLink";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  const a = seasonsConfig(new Date().getMonth());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-14 md:px-24 md:py-24 overflow-x-hidden">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by creating your&nbsp;
          <code className="font-mono font-bold">Unique Space</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center pt-4 lg:pt-0 h-[250px] lg:h-auto before:absolute before:h-[300px] before:lg:h-[360px] before:w-full sm:before:w-[480px] before:-translate-x-[20%] before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-[100%] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-pink-900 after:dark:via-[#ff0195] after:dark:opacity-40">
        <div className="flex flex-row items-center lg:min-w-[360px]">
          {a && <MainText />}
          {a && (
            <Image
              className="relative dark:drop-shadow-[0_1px_0.1rem_#fffefe70] dark"
              src={a.img}
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          )}
        </div>
      </div>

      <div className="mt-8 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <FooterLink
          url="/register"
          description="A space is a group that you create where several people can be added."
          title={"Create Space"}
        />

        <FooterLink
          url="#learn"
          target="_blank"
          rel="noopener noreferrer"
          description="Learn about Spaces and all exciting things to do in an interactive course!"
          title={"Learn"}
        />

        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a> */}

        <FooterLink
          url="tel:+2349059620514"
          target="_blank"
          rel="noopener noreferrer"
          description="Instantly reach us by phone to say a quick hello."
          title={"Contact Us"}
        />
      </div>
    </main>
  );
}
