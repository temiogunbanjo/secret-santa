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
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-14 md:px-24 md:py-24 overflow-x-hidden">
      {!isMember ? (
        <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row z-10 lg:max-w-5xl w-full items-center justify-between font-mono text-sm mb-8">
          <form
            onSubmit={submitHandler}
            className="lg:relative flex flex-col gap-3 w-full lg:w-[300px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-6 pb-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 p-6 lg:dark:bg-zinc-800/30"
          >
            {/* Get started by editing&nbsp;
          <code className="font-mono font-bold">register/page.tsx</code> */}
            <p className="mb-4 text-xl">Register as member</p>
            <Input
              label="Full Name"
              name="fullname"
              placeholder="e.g. Temi O"
              onChange={handleChange("fullname")}
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              required
              placeholder="e.g. johndoe@gmail.com"
              onChange={handleChange("email")}
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="e.g. 090XXXXXX"
              onChange={handleChange("phone")}
            />
            <button
              type="submit"
              disabled={!spaceInfo}
              className="mt-3 bg-zinc-800 hover:dark:bg-red-700 rounded-md px-2 py-2 outline-none"
            >
              {`Join ${spaceInfo?.spaceName || ""}`}
            </button>
          </form>

          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:lg:h-[360px] before:w-full sm:before:w-[480px] before:-translate-x-[20%] before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-[100%] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-pink-900 after:dark:via-[#ff0195] after:dark:opacity-40">
            <div className="flex flex-row items-center lg:min-w-[360px]">
              {a && (
                <h1 className="mr-14 min-w-48 capitalize">
                  <span className="font-normal text-xl lg:text-2xl">
                    {a.superText}
                  </span>
                  <br />
                  <span className="text-4xl lg:text-5xl font-semibold">
                    {a.emphasisText}
                  </span>
                  {spaceName && (
                    <>
                      <br />
                      <span className="font-light text-md lg:text-xl mt-1 text-right inline-block w-full text-orange-500">{`For ${
                        spaceInfo?.spaceName || "..."
                      }`}</span>
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
      ) : (
        <div className="flex flex-col gap-10 z-10 lg:max-w-5xl w-full min-h-[200px] items-center justify-center font-mono text-sm mb-14">
          <h2 className="font-bold text-2xl text-center">{`${spaceInfo?.people?.length} members in ${spaceInfo?.spaceName}`}</h2>
          <div className="grid justify-center items-center gap-8 grid-cols-4 lg:grid-cols-6">
            {spaceInfo?.people?.map((p: any, i: number) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-full border border-gray-300 w-[50px] h-[50px]"
              >
                p
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-center">
              Hurray! You have been paired with{" "}
              <em className="font-bold text-lg">Salome</em>...
            </span>
            <div className="grid justify-center items-center gap-8 grid-cols-2 lg:grid-cols-2">
              <button
                disabled={!spaceInfo}
                className="mt-3 bg-zinc-800 hover:dark:bg-red-700 rounded-md px-2 py-2 outline-none"
              >
                {`Call Salome`}
              </button>

              <button
                disabled={!spaceInfo}
                className="mt-3 bg-zinc-800 hover:dark:bg-red-700 rounded-md px-2 py-2 outline-none"
              >
                {`Share on Whatsapp`}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-30 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="#learn"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl lg:text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Spaces and all exciting things to do in an interactive
            course!
          </p>
        </a>

        <a
          href="/register"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-xl lg:text-2xl font-semibold`}>
            Create A Space{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A space is a group that you create where several people can be
            added. Learn more on our home page.
          </p>
        </a>

        <a
          href="#share"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl lg:text-2xl font-semibold`}>
            Share{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly get your friends & family to join your space using your
            space URL.
          </p>
        </a>
      </div>
    </main>
  );
}
