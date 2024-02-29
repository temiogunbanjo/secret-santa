"use client";
import React from "react";
import TypeIt from "typeit-react";

function Fave() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center py-14 px-12 md:px-24 md:py-24 overflow-x-hidden bg-purple-950 text-xl font-normal">
      <TypeIt
        getBeforeInit={(instance) => {
          instance
            .type("Hiii Favy,", { speed: 10, })
            .break()
            .break()
            .type("Happy birthday baby girl, ", { speed: 10, })
            .pause(750)
            .type("hope you forgive me for not calling you till now?", { speed: 10, })
            .break()
            .break()
            .type("I wanted to do something different this time around but nepa didn't let me complete it...")
            .pause(550)
            .delete(800)
            .type("HAPPY BIRTHDAY SUGAR MUMMY!!!")

          return instance;
        }}
      />
    </main>
  );
}

export default Fave;
