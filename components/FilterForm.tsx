"use client";
import { useState } from "react";
import { formUrlForm } from "@/service/SearchQuery";
import { useSearchParams, useRouter } from "next/navigation";
const links = ["All", "Next 13", "Frontend", "Backend", "Fullstack"];

const FilterForm = () => {
  const [active, setActive] = useState("All");
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleFilter = (link: string) => {
    let newUrl = "";

    if (active === link) {
      setActive("");
      newUrl = formUrlForm({
        params: searchParams.toString(),
        key: "category",
        value: null,
      });
      router.push(newUrl, { scroll: false });

      // useRouter.push(newUrl, undefined, { scroll: false as const });
    } else {
      setActive(link);
      newUrl = formUrlForm({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
      router.push(newUrl, { scroll: false }); //scroll moves us at top
    }
  };
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto pt-8 pb-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize bg-slate-600`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};
export default FilterForm;
