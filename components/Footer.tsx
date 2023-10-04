import Link from "next/link";
import React from "react";

const FixedFooter = () => {
  return (
    <footer className="flex-between max-md:flex-col">
      <p>Copyright &#169; 2023 by Prathamesh Chougale | All Rights Reserved</p>
      <div className="flex gap-x-9">
        <Link href="/Terms-of-use">Terms &amp; Condition</Link>
        <Link href="/Terms-of-use">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default FixedFooter;
