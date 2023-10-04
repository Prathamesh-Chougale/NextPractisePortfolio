import Link from "next/link";
import React from "react";

const FixedFooter = () => {
  return (
    <footer className=" border-t-2">
      <div className="mt-4 flex-between w-full px-10 max-md:flex-col">
        <p>
          Copyright &#169; 2023 by Prathamesh Chougale | All Rights Reserved
        </p>
        <div className="flex gap-x-9">
          <Link href="/Terms-of-use">Terms &amp; Condition</Link>
          <Link href="/Terms-of-use">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default FixedFooter;
