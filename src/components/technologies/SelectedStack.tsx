import type { ITechnologies } from "../../types/Type";

const SelectedStack = ({ technologies }: { technologies: ITechnologies[] }) => {
  return (
    <div>
      <div className="border border-gray-200 p-6 rounded-2xl space-y-2 font-jakarta">
        <h2 className="font-bold text-xl">Your Stack</h2>
        <p className="text-[#94A3B8] text-sm">No technologies selected yet.</p>
        <div className="border border-dashed border-gray-300 p-6 rounded-2xl text-sm text-[#94A3B8] flex justify-center">
          Your stack is empty.
        </div>
      </div>
    </div>
  );
};

export default SelectedStack;
