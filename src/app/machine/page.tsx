"use client";

import StateNAction from "@/components/StateNAction";
import Strip from "@/components/Strip";
import { StripProps } from "@/components/Strip";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Machine() {
  const [stateNo, setStateNo] = useState(1);
  const [head, setHead] = useState(0);

  const stripInit = Array.from({ length: 17 }, () => ({
    value: null,
    isHead: false,
  }));

  stripInit[0].isHead = true;

  const [strip, setStrip] = useState<StripProps["values"]>(stripInit);

  const searchParams = useSearchParams();

  const num1 = searchParams.get("num1");
  const num2 = searchParams.get("num2");

  useEffect(() => {
    // set up the initial strip
    const updatedStrip = [...strip];

    updatedStrip[Number(0)] = { value: null, isHead: false };

    for (let i = 1; i <= Number(num1); i++) {
      updatedStrip[i] = { value: 1, isHead: false };
    }

    updatedStrip[Number(num1) + 1] = { value: 0, isHead: false };

    for (let i = Number(num1) + 2; i < Number(num1) + Number(num2) + 2; i++) {
      updatedStrip[i] = { value: 1, isHead: false };
    }

    updatedStrip[0].isHead = true;

    setStrip(updatedStrip);
  }, []);

  const setVal = (val: 1 | 0 | null) => {
    const updatedStrip = [...strip];
    updatedStrip[head] = { ...updatedStrip[head], value: val };
    setStrip(updatedStrip);
  };

  const move = (dir: "right" | "left") => {
    const updatedStrip = [...strip];
    updatedStrip[head] = { ...updatedStrip[head], isHead: false };
    setStrip(updatedStrip);

    console.log(head + 1 < strip.length);

    if (dir === "right" && head + 1 < strip.length) {
      updatedStrip[head + 1] = { ...updatedStrip[head + 1], isHead: true };
      setStrip(updatedStrip);

      setHead(head + 1);
    } else if (dir === "left" && head - 1 >= 0) {
      updatedStrip[head - 1] = { ...updatedStrip[head - 1], isHead: true };
      setStrip(updatedStrip);

      setHead(head - 1);
    }
  };

  const handleMoveHead = () => {
    if (stateNo === 1) {
      if (strip[head].value === 0) {
        setVal(1);
        setStateNo(stateNo + 1);
      } else if (strip[head].value === 1 || strip[head].value === null) {
        move("right");
      }
    } else if (stateNo === 2) {
      // find null
      // go back
      if (strip[head].value === null) {
        move("left");
        setStateNo(stateNo + 1);
        // setVal(null);
      } else if (strip[head].value === 1) {
        move("right");
      }
    } else if (stateNo === 3) {
      // search for 1
      // 1 -> null
      if (strip[head].value === 1) {
        setVal(null);
        setStateNo(stateNo + 1);
      } else {
        move("left");
      }
    } else if (stateNo === 4) {
      // looking for blank
      move("left");
      if (strip[head].value === null) {
        setStateNo(stateNo + 1);
      }
    } else if (stateNo === 5) {
      // Looking for null
      // move right and display the answer
      if (strip[head].value === null) {
        move("right");
        setStateNo(stateNo + 1);
      } else {
        move("left");
      }
    } else if (stateNo === 6) {
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20 overflow-hidden">
      <h1 className="text-6xl text-[#00576A] font-extrabold mt-10">
        Turing Machine
      </h1>
      <h3 className="text-2xl text-[#00576A] font-semibold m-5 ">
        {"(Addition)"}
      </h3>
      <StateNAction stateNo={stateNo} />
      <Strip values={strip} />
      <div>
        <button
          className="bg-[#00576A] text-gray-50 text-3xl py-2 px-4 rounded-lg m-10"
          onClick={handleMoveHead}
        >
          Next
        </button>
      </div>
      <div className="text-xl text-green-700 font-bold">
        {stateNo === 6
          ? `Solution strip containing ${
              Number(num1) + Number(num2)
            } (${num1}+${num2})  no.of 1s Achieved!`
          : null}
      </div>
      <div className="flex items-center justify-center gap-5 absolute bottom-10 right-10">
        <div className="bg-[#F9DC5C] w-12 h-12 flex items-center justify-center text-4xl rounded-xl shrink-0 border-gray-50 border-2 font-bold"></div>
        <div className="text-xl">: Shows head position</div>
      </div>
    </div>
  );
}
