"use client"

import StateNAction from "@/components/StateNAction";
import Strip from "@/components/Strip";
import { StripProps } from "@/components/Strip";
import { output } from "@/mock/output";
import { useState } from "react";

export default function Machine() {
  const [stateNo, setStateNo] = useState(0);
  let strip = output[stateNo];
  console.log("strip", strip);

  return (
    <div className="flex flex-col items-center justify-center pt-20 overflow-hidden">
      <h1 className="text-6xl text-[#00576A] font-extrabold mt-10">
        Turing Machine
      </h1>
      <h3 className="text-2xl text-[#00576A] font-semibold m-5 ">
        {"(Addition)"}
      </h3>
      <StateNAction />
      <Strip values={strip} />
      <div>
        <button className="bg-[#00576A] text-gray-50 text-3xl py-2 px-4 rounded-lg m-10" onClick={() => setStateNo(stateNo+1)}>Next</button>
      </div>
      <div className="flex items-center justify-center gap-5 absolute bottom-10 right-10">
        <div className="bg-[#F9DC5C] w-12 h-12 flex items-center justify-center text-4xl rounded-xl shrink-0 border-gray-50 border-2 font-bold"></div>
        <div className="text-xl">: Shows head position</div>
      </div>
    </div>
  );
}
