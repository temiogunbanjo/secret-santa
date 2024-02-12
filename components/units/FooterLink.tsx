import React from "react";
import { Poppins } from "next/font/google";
import { ImArrowRight2 } from "react-icons/im";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

type FooterLinkProps = {
  title: string | React.ReactNode;
  description: string;
  url: string;
  target?: string;
  rel?: string;
};

function FooterLink({ title, description, url, ...props }: FooterLinkProps) {
  return (
    <a
      href={url}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      {...props}
    >
      <h2 className={`flex items-center justify-center lg:justify-start mb-3 text-xl lg:text-2xl font-semibold`}>
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
          <ImArrowRight2 />
        </span>
      </h2>
      <p className={`text-center lg:text-left m-0 max-w-[30ch] text-sm opacity-50 ${poppins.className}`}>
        {description}
      </p>
    </a>
  );
}

export default FooterLink;
