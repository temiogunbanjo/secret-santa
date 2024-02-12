import seasonsConfig from "@/constants/seasons.config";
import React from "react";

function MainText({ spaceName }: { spaceName?: string }) {
  const a = seasonsConfig(new Date().getMonth());

  return (
    <h1 className="mr-10 lg:mr-14 min-w-48 capitalize">
      <span className="inline-block font-normal text-xl lg:text-2xl mb-1">
        {a.superText}
      </span>
      <br />
      <span className="text-4xl lg:text-5xl font-semibold">
        {a.emphasisText}
      </span>
      {spaceName && (
        <>
          <br />
          <span className="font-light text-base lg:text-base mt-1.5 text-right inline-block w-full text-orange-500">{`For ${
            spaceName || "..."
          }`}</span>
        </>
      )}
    </h1>
  );
}

export default MainText;
