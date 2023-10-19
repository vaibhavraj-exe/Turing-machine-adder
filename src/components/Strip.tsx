"use client"

import { useState } from "react";

interface Unit {
  value: number;
  isHead: boolean;
}

export interface StripProps {
  values: Unit[];
}

export default function Strip(props: StripProps) {
  const [isHead, setisHead] = useState(false);
  return (
    <div className="bg-gray-50 py-5">
      <div className=" flex -ml-8 overflow-hidden">
        <div className="bg-[#83B87F] width-1-17-width py-3 flex items-center justify-center text-4xl rounded-xl shrink-0 border-gray-50 border-2 font-bold">
          0
        </div>
        {props.values.map((item, index) => {
          return (
            <div className={` width-1-17-width py-2 flex items-center justify-center text-4xl rounded-xl shrink-0 border-gray-50 border-2 font-bold ${item.isHead ? "bg-[#F9DC5C]" : "bg-[#83B87F]"}`}>
              {item.value}
            </div>
          );
        })}
        <div className="bg-[#83B87F] width-1-17-width py-2 flex items-center justify-center text-4xl rounded-xl shrink-0 border-gray-50 border-2 font-bold">
          0
        </div>
      </div>
    </div>
  );
}
