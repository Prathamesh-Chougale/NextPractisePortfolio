"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-3"
          width={22}
          height={22}
          alt="search icon"
        />
        <Input
          className="base-regular h-fit border-0 bg-black-400 ml-1 pl-10 pr-8 !ring-0 !ring-offset-0"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchForm;
