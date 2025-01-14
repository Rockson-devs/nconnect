import React from "react";
import Link from "next/link";
function Regions() {
  return (
    <div className="h-3/4 w-screen">
      List of Regions
      <Link href="/pages/userId/explore/region">Selected Region</Link>
      <Link href="/pages/signIn">Sign In</Link>
      <Link href="/pages/signUp">Sign Up</Link>
    </div>
  );
}

export default Regions;
