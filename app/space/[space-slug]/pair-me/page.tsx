"use client";
import FooterLink from "@/components/units/FooterLink";
import Gravatars from "@/components/units/Gravatars";
import seasonsConfig from "@/constants/seasons.config";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrganizationHome() {
  const a = seasonsConfig(new Date().getMonth());
  const { ["space-slug"]: spaceName } = useParams();

  const [spaceInfo, setSpaceInfo] = useState<{ [x: string]: any } | null>(null);

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
      <div className="flex flex-col gap-10 z-10 lg:max-w-5xl w-full min-h-[200px] items-center justify-center font-sans text-sm mb-14">
        <h2 className="font-bold text-2xl text-center">{`${spaceInfo?.people?.length} members in ${spaceInfo?.spaceName}`}</h2>
        <div className="flex -space-x-4 rtl:space-x-reverse w-auto">
          {spaceInfo?.people?.slice(0, 4)?.map((p: any, i: number) => (
            <Gravatars key={i} isActive={i === 2}>
              AL
            </Gravatars>
          ))}
          {spaceInfo?.people?.length > 4 && (
            <div
              className={`flex items-center justify-center uppercase text-xl font-bold rounded-full w-[65px] h-[65px] p-1 bg-zinc-100 dark:bg-zinc-700 ring-4 ring-zinc-500`}
            >
              +{spaceInfo?.people?.length - 4}
            </div>
          )}
        </div>

        {/* <PersonPicker people={["Alice", "Bob", "Charlie", "David", "Eve"]} /> */}

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

      <div className="mb-30 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <FooterLink
          url="#learn"
          description="Learn about Spaces and all exciting things to do in an interactive course!"
          title={"Learn"}
        />

        <FooterLink
          url="/register"
          description="A space is a group that you create where several people can be added."
          title={"Create Space"}
        />

        <FooterLink
          url="#share"
          description="Instantly get your friends & family to join your space using your space URL."
          title={"Share"}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </main>
  );
}
