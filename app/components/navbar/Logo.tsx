"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className="cursor-pointer">
      <Image
        src="/images/airbnb-logo.png"
        alt="Airbnb Logo"
        className="hidden md:block cursor-pointer"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Logo;
