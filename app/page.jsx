"use client";
import Link from "next/link";
const LandingPage = () => {
  return (
    // Mobile view
    <>
      {/* <div className="h-screen w-full bg-[url('/public/assets/images/background.png')]"> */}
      <div
        className="relative h-screen bg-local container mx-auto bg-no-repeat bg-scroll bg-cover object-none h-100 w-96  z-50"
        style={{
          backgroundImage: "url(/assets/images/background-image.jpg)",
          opacity: "0.8",
        }}
      >
        <div className="absolute inset-0 bg-green-950 opacity-90"></div>
        {/* <div className="h-1/4 outline">NConnect</div>
        <div className="h-4/5 outline outline-black"> */}
        {/* <div>NConnect </div> */}
        <div className="flex flex-col justify-end h-full">
          <div className="grid justify-items-center m-auto ">
            <p className="text-slate-50 font-bold text-3xl text-gray-50 z-0">
              Search Locate <br />
              & contact any NIA <br />
              office near you
            </p>
            {/* </div> */}
            {/* <div className="grid justify-items-center m-auto "> */}
            <button className="bg-slate-50 rounded-xl shadow-lg space-x-4 w-40 z-0 my-7 mr-8 text-lime-700">
              <Link href="/pages/explore">Explore</Link>
            </button>
            <button className=" rounded-xl shadow-lg space-x-4 w-40 bg-lime-700 z-0 mr-8 text-slate-50">
              <Link href="/pages/signIn">Sign In</Link>
            </button>
          </div>
        </div>
        {/* <div className="h-4/5 outline outline-black">
          <Link href="/pages/signIn">Sign In</Link>
        </div> */}
      </div>

      {/* Desktop View */}
    </>
  );
};

export default LandingPage;
