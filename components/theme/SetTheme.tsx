"use client";
import React from "react";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { useTheme } from "next-themes";

const SetTheme = () => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => setTheme("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default SetTheme;
