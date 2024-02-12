"use client";
import seasonsConfig from "@/constants/seasons.config";
import Input from "@/components/units/Input";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createMember, getSpace } from "@/redux/actions/db.actions";
import { MemberDTO } from "@/types/MemberDTO";
import MainText from "@/components/units/MainText";
import FooterLink from "@/components/units/FooterLink";

// import PersonPicker from "@/components/units/PersonPicker";

export default function ViewOrganization() {
  const router = useRouter();

  const a = seasonsConfig(new Date().getMonth());
  const { ["space-slug"]: spaceName } = useParams();

  const [localState, setLocalState] = useState<{ [x: string]: string }>({});
  const [spaceInfo, setSpaceInfo] = useState<{ [x: string]: any } | null>(null);

  const submitHandler = async (ev: FormEvent) => {
    ev.preventDefault();
    if (spaceInfo?.spaceName) {
      const res = await createMember(
        spaceInfo?.spaceName,
        localState as MemberDTO
      );
      router.push(`/space/${spaceName}/pair-me`);
      // setIsMember(true);
    }
  };

  const handleChange =
    (name: string) => (ev: ChangeEvent & { target: { value: string } }) => {
      setLocalState((prev) => ({ ...prev, [name]: ev.target.value }));
    };

  useEffect(() => {
    (async () => {
      const b = await getSpace(window.decodeURIComponent(spaceName as string));
      setSpaceInfo(b);
    })();
  }, [spaceName]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-12 md:px-24 md:py-24 overflow-x-hidden">
      <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row z-10 lg:max-w-5xl w-full items-center justify-between text-sm mb-8">
        <form
          onSubmit={submitHandler}
          className="lg:relative flex flex-col gap-3 w-full lg:w-[300px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-6 pb-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 p-6 lg:dark:bg-zinc-800/30"
        >
          {/* Get started by editing&nbsp;
          <code className="font-mono font-bold">register/page.tsx</code> */}
          <p className="mb-4 text-xl font-mono">Register as member</p>
          <Input
            label="Full Name"
            name="fullname"
            placeholder="e.g. John Doe"
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
            {a && <MainText spaceName={spaceInfo?.spaceName} />}
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

      <div className="mb-30 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <FooterLink
          url="#learn"
          // target="_blank"
          // rel="noopener noreferrer"
          description=" Learn about Spaces and all exciting things to do in an interactive course!"
          title={"Learn"}
        />

        <FooterLink
          url="#share"
          target="_blank"
          rel="noopener noreferrer"
          description="Instantly get your friends & family to join your space using your space URL."
          title={"Share"}
        />

        <FooterLink
          url="/register"
          // target="_blank"
          // rel="noopener noreferrer"
          description="A space is a group that you create where several people can be added. Learn more on our home page."
          title={"Create Space"}
        />
      </div>
    </main>
  );
}
