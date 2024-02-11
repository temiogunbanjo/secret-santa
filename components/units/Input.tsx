import React, { ChangeEvent, ChangeEventHandler, HtmlHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  id?: string;
  name?: string;
  type?: "email" | "tel" | "text" | "password" | "date";
  placeholder?: string;
  onChange?: ChangeEventHandler | ((ev: ChangeEvent) => void);
  required?: boolean | undefined
};

function Input({ label, id, name, ...rest }: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-xs mb-1">{label}</label>
      <input id={id || name} name={name || id} className="bg-zinc-800 rounded-md px-2 py-2 outline-none" {...rest} />
    </div>
  );
}

export default Input;
