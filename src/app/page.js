"use client"

import Image from "next/image";
import { useState } from "react";

const scrambles = [
  "L2 U B U' F' D' L B' F L' D' R2 F L' B L' D' B D2 L'",
  "U' L2 F' U2 B' U2 F2 D2 F R2 B' L2 B2 D L F D2 L' D2",
  "R' B F D L U B' L B' L2 D' F2 U' R' F' D B' D U2 L2",
];

export default function Home() {
  const [currentScrambleIndex, setCurrentScrambleIndex] = useState(-1);

  const generateScramble = () => {
    setCurrentScrambleIndex((prevIndex) => (prevIndex + 1) % scrambles.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Cube Scramble Generator</h1>
      <p className="text-lg mb-8 text-gray-300">
        Click the button to generate a scramble for your Rubiks Cube.
      </p>
      <img
        src="/rubiks-cube.png"
        alt="Rubiks Cube"
        className="w-32 h-32 mb-6"
      />
      <div className="bg-gray-800 text-gray-200 p-4 rounded-lg mb-6 text-center text-2xl tracking-widest">
        {currentScrambleIndex === -1
          ? "Your scramble will appear here."
          : scrambles[currentScrambleIndex]}
      </div>
      <button
        onClick={generateScramble}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Generate Scramble
      </button>
    </div>
  );
}
