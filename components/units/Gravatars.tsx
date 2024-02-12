import React from "react";

function Gravatars({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center uppercase text-xl font-bold rounded-full w-[65px] h-[65px] p-1 ${
        isActive
          ? "bg-pink-100 dark:bg-pink-600 ring-4 ring-pink-300 dark:ring-pink-500"
          : "bg-gray-100 dark:bg-gray-600 ring-4 ring-gray-300 "
      }`}
    >
      {children}
    </div>
  );
}

export default Gravatars;
