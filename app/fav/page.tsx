"use client";
import React from "react";
import TypeIt from "typeit-react";

function Fave() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center py-14 px-12 md:px-24 md:py-24 overflow-x-hidden bg-purple-950 text-2xl font-semibold">
      <TypeIt
        getBeforeInit={(instance) => {
          instance
            .type("Hiii Favy,", { speed: 10, })
            .break()
            .type("Happy birthday baby girl, hope you forgive me for not calling you till now?", { speed: 10, })
            .break()
            .type("I wanted to do something different this time around");

          return instance;
        }}
      />
    </main>
  );
}

export default Fave;
