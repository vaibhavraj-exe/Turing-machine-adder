"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { output } from "@/mock/output";

export default function Home() {
  const router = useRouter();

  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);

  const handleEvaluate = () => {
    if (num1 === null || num2 === null) {
      toast.error("Please enter both numbers");
      return;
    }
    router.push("/machine");
  };
  return (
    <div className="flex flex-col items-center justify-center pt-20 overflow-hidden">
      <h1 className="text-6xl text-[#00576A] font-extrabold mt-10">
        Turing Machine
      </h1>
      <h3 className="text-2xl text-[#00576A] font-semibold m-5 ">
        {"(Addition)"}
      </h3>
      <div className="flex justify-center items-center gap-10 m-20">
        <input
          type="number"
          name="num1"
          className="w-20 h-20 text-6xl text-center text-gray-700 border-none rounded-sm"
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
        <p className="text-6xl text-[#00576A]">+</p>
        <input
          type="number"
          name="num2"
          className="w-20 h-20 text-6xl text-center text-gray-700 border-none rounded-sm"
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
      </div>
      <button
        className="bg-[#00576A] text-gray-50 text-xl p-5 rounded-lg"
        onClick={handleEvaluate}
      >
        Get evaluation process
      </button>
    </div>
  );
}
