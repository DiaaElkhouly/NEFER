import React from "react";

export default function AboutNefer() {
  return (
    <div className="min-h-screen bg-cadenzaBlack text-cloud py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-baccarat text-center mb-8 nefer-font text-pink-950 ">
          About NEFER
        </h1>
        <div className="flex justify-center mb-3">
          <img className="w-[40%]  " src="./images/Asset.png" alt="" />
        </div>
        <h1 className="text-xl font-normal text-baccarat text-center mb-4 nefer-font text-pink-950 bg-pink-300 rounded-2xl">
          The Face of Nefertiti
        </h1>
        <p className="text-lg text-gray-300 text-left">
          “At the heart of the logo stands the timeless face of Queen Nefertiti,
          a symbol globally associated with elegance, grace, and beauty. Her
          presence reflects both the Egyptian origin of the brand and the
          meaning behind her name—‘the beautiful one has come.’ It embodies
          NEFER’s promise of refined, enduring beauty.”The Face of Nefertiti The
          Cartouche (Oval Shape) “At the heart of the logo stands the timeless
          face of Queen Nefertiti, a symbol globally associated with elegance,
          grace, and beauty. Her presence reflects both the Egyptian origin of
          the brand and the meaning behind her name—‘the beautiful one has
          come.’ It embodies NEFER’s promise of refined, enduring beauty.”
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}
