import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../../types/Type";
import SelectedStackCard from "./SelectedStackCard";
import { toast } from "react-toastify";

interface ISelectedStackProps {
  selectedStack: ITechnologies[];
  setSelectedStack: Dispatch<SetStateAction<ITechnologies[]>>;
}

const SelectedStack = ({
  selectedStack,
  setSelectedStack,
}: ISelectedStackProps) => {

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.info("All Stacks are removed Successfully!");
  };

  if (selectedStack.length === 0) {
    return (
      <div className="flex justify-center md:justify-start items-center md:items-start">
        <div className="w-[90%] md:w-full border-2 md:border border-gray-200 p-6 rounded-2xl space-y-2 font-jakarta">
          <h2 className="font-bold text-xl">Your Stack</h2>
          <p className="text-[#94A3B8] text-sm md:text-[11px] xl:text-sm">
            No technologies selected yet.
          </p>
          <div className="border-2 md:border border-dashed border-gray-300 mt-4 p-6 rounded-2xl text-sm md:text-xs xl:text-sm text-[#94A3B8] flex justify-center">
            Your stack is empty.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center md:justify-start items-center md:items-start">
      <div className="w-[90%] md:w-full border-2 md:border border-gray-200 p-6 rounded-2xl space-y-2 font-jakarta">
        <h2 className="font-bold text-xl">Your Stack</h2>
        <p className="text-[#94A3B8] text-sm">
          {selectedStack.length} Technology Selected
        </p>
        <div className="flex flex-col gap-2 mt-6">
          {selectedStack.map((technology: ITechnologies, idx: number) => (
            <SelectedStackCard
              key={idx}
              technology={technology}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          ))}
        </div>
        <button onClick={handleRemoveAll} className="btn border border-red-600 rounded-xl w-full bg-white text-red-600 mt-12">
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelectedStack;
