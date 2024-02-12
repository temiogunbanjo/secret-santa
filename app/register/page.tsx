"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import seasonsConfig from "@/constants/seasons.config";
import Input from "@/components/units/Input";
import { createSpace } from "@/redux/actions/db.actions";
import { SpaceDTO } from "@/types/SpaceDTO";
import MainText from "@/components/units/MainText";
import FooterLink from "@/components/units/FooterLink";

export default function Register() {
  const a = seasonsConfig(new Date().getMonth());
  const [localState, setLocalState] = useState<{ [x: string]: string }>({});
  const [hasCreatedSpace, setHasCreatedSpace] = useState(false);
  const [spaceName, setSpaceName] = useState("");

  const submitHandler = async (ev: FormEvent) => {
    ev.preventDefault();
    await createSpace(localState as SpaceDTO);
    setHasCreatedSpace(true);
    setSpaceName(localState["spaceName"].toLowerCase());
  };

  const handleChange =
    (name: string) => (ev: ChangeEvent & { target: { value: string } }) => {
      setLocalState((prev) => ({ ...prev, [name]: ev.target.value }));
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-14 md:px-24 md:py-24 overflow-x-hidden">
      <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row max-w-5xl z-10 w-full items-center justify-between text-sm my-4">
        {!hasCreatedSpace ? (
          <form
            onSubmit={submitHandler}
            className="lg:relative flex flex-col gap-3 w-full lg:w-[300px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-6 pb-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 p-6 lg:dark:bg-zinc-800/30"
          >
            {/* Get started by editing&nbsp;
          <code className="font-mono font-bold">register/page.tsx</code> */}
            <p className="mb-4 lg:text-xl text-base font-mono font-semibold">
              A Unique Space For Just You
            </p>
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="e.g. johndoe@gmail.com"
              onChange={handleChange("email")}
              required
            />
            <Input
              label="Space Name"
              name="spaceName"
              placeholder="e.g. Family & Friends"
              onChange={handleChange("spaceName")}
              required
            />
            <button
              type="submit"
              className="mt-3 bg-zinc-800 hover:dark:bg-red-700 rounded-md px-2 py-2 outline-none"
            >
              Create
            </button>
          </form>
        ) : (
          <div className="lg:relative flex flex-col gap-2 w-full lg:max-w-[380px] lg:min-w-[300px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-6 pb-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 p-6 lg:dark:bg-zinc-800/30">
            <p className="mb-4 text-xl">Awesome! Your space is live now</p>
            <a
              href={`${window.location.origin}/space/${spaceName}`}
              className="inline-block font-mono font-normal border-b border-zinc-700 break-words"
            >
              {`${window.location.origin}/space/${spaceName}`}
            </a>
            <button className="mt-4 bg-zinc-800 hover:dark:bg-red-700 rounded-md px-2 py-2 outline-none">
              Share link
            </button>
          </div>
        )}

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:lg:h-[360px] before:w-full sm:before:w-[480px] before:-translate-x-[20%] before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-[100%] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-pink-900 after:dark:via-[#ff0195] after:dark:opacity-40">
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
      </div>

      <div className="mt-6 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <FooterLink
          url="/"
          description="Return to our main website."
          title={"Home"}
        />

        <FooterLink
          url="#learn"
          description="Learn about Spaces and all exciting things to do in an interactive course!"
          title={"Learn"}
        />

        <FooterLink
          url="#templates"
          description="Explore starter templates for your space."
          title={"Templates"}
        />

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
