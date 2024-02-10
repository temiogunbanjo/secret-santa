"use client";
import seasonsConfig from "@/constants/seasons.config";
import Input from "@/components/units/Input";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function OrganizationHome() {
  const a = seasonsConfig(new Date().getMonth());
  const { ["organization-slug"]: spaceName } = useParams();

  const [localState, setLocalState] = useState<{ [x: string]: string }>({});
  const [spaceInfo, setSpaceInfo] = useState<{ [x: string]: any } | null>(null);
  const [isMember, setIsMember] = useState(false);

  const submitHandler = (ev: FormEvent) => {
    ev.preventDefault();
    if (spaceInfo?.spaceName) {
      window.localStorage.setItem(
        spaceInfo?.spaceName,
        JSON.stringify({
          ...spaceInfo,
          people: ([] as { [x: string]: any })
            .concat(spaceInfo?.people || [])
            .concat([{ ...localState }]),
        })
      );
      setIsMember(true);
    }
  };

  const handleChange =
    (name: string) => (ev: ChangeEvent & { target: { value: string } }) => {
      setLocalState((prev) => ({ ...prev, [name]: ev.target.value }));
    };

  const getSpaceInfo = (name: string) => {
    const info = window.localStorage.getItem(name);
    return JSON.parse(info || "{}");
  };

  useEffect(() => {
    const b = getSpaceInfo(window.decodeURIComponent(spaceName as string));
    setSpaceInfo(b);
  }, [spaceName]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex my-4">
        {!isMember ? (
          <form
            onSubmit={submitHandler}
            className="lg:relative flex flex-col gap-2 w-full lg:w-[300px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-6 pb-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 p-6 lg:dark:bg-zinc-800/30"
          >
            {/* Get started by editing&nbsp;
          <code className="font-mono font-bold">register/page.tsx</code> */}
            <p className="mb-4 text-xl">Register as member</p>
            <Input
              label="Full Name"
              name="fullname"
              placeholder="e.g. Temi O"
              onChange={handleChange("fullname")}
            />
            <Input
              label="Email Address"
              name="email"
              placeholder="e.g. johndoe@gmail.com"
              onChange={handleChange("email")}
            />
            <button
              type="submit"
              className="mt-2 bg-zinc-800 hover:dark:bg-red-700 rounded-md px-2 py-2 outline-none"
            >
              {`Join ${spaceInfo?.spaceName || ""}`}
            </button>
          </form>
        ) : (
          <div></div>
        )}

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:lg:h-[360px] before:w-full sm:before:w-[480px] before:-translate-x-[20%] before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-[100%] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-pink-900 after:dark:via-[#ff0195] after:dark:opacity-40">
          <div className="flex flex-row items-center lg:min-w-[360px]">
            {a && (
              <h1 className="mr-14 min-w-48 capitalize">
                <span className="font-normal text-2xl">{a.superText}</span>
                <br />
                <span className="text-5xl font-semibold">{a.emphasisText}</span>
                {spaceName && (
                  <>
                    <br />
                    <span className="font-light text-xl mt-1 text-right inline-block w-full text-yellow-500">{`For ${spaceInfo?.spaceName}`}</span>
                  </>
                )}
              </h1>
            )}
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

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Create Your Space{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

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

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
