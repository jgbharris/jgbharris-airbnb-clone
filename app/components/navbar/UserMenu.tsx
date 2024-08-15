"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {
            console.log("test");
          }}
          className="full hidden cursor-pointer rounded px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          Airbnb your home
        </div>
        <div
          onClick={() => {
            console.log("test 2");
          }}
          className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu size={24} />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
