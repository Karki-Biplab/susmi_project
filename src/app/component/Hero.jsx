import React from "react";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Susmi</h1>
      <p className="mt-4 text-lg">Your one-stop solution for all your needs.</p>
      <div className="mt-8">
        <a
          href="/"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
export default Hero;