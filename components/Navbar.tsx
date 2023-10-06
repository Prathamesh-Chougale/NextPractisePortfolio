import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChangeTheme from "./theme/ChangeTheme";

const FixedNavbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 bg-black border-black-200 py-4 ">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-12">
        <Link href="/">
          <Image
            priority={false}
            src="/logo1.jpg"
            width={55}
            height={40}
            alt="logo"
          />
        </Link>
        <Image
          src="/hamburger.png"
          alt="dropdown"
          height={30}
          width={40}
          className="block md:hidden"
        />

        <ul className="flex gap-x-3 max-md:hidden md:gap-x-3 items-center">
          <li className="body-text text-gradient_blue-purple font-bold">
            <Link href="/" target="_blank">
              Home
            </Link>
          </li>
          <li className="body-text text-gradient_blue-purple font-bold">
            <Link href="/" target="_blank">
              Projects
            </Link>
          </li>
          <li className="body-text text-gradient_blue-purple font-bold">
            <Link href="/" target="_blank">
              About
            </Link>
          </li>
          <li className="body-text text-gradient_blue-purple font-bold">
            <Link href="/" target="_blank">
              AI
            </Link>
          </li>
          <li className="body-text text-gradient_blue-purple font-bold">
            <Link href="/" target="_blank">
              Contact
            </Link>
          </li>
          <li>
            <ChangeTheme />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FixedNavbar;
