import { use, useState } from "react";
import type { ITechnologies } from "../../types/Type";
import TechnologiesCard from "./TechnologiesCard";
import SelectedStack from "./SelectedStack";

const Technologies = ({
  technologiesPromise,
}: {
  technologiesPromise: Promise<ITechnologies[]>;
}) => {
  const technologies = use(technologiesPromise);

  const [selectedStack, setSelectedStack] = useState<ITechnologies[]>([]);

  return (
    <div className="max-w-7xl mx-auto space-y-2 mt-16">
        <h1 className="text-4xl font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h1>
        <p className="text-[#64748B] font-jakarta">Pick one technology per category to build your ideal stack.</p>
        
        <div className="grid grid-cols-12 gap-8 mt-12">
            {/* left */}
            <div className="grid col-span-9">
                <div className="grid grid-cols-3 gap-6">
                    {technologies.map((technology: ITechnologies, idx: number) => (
                        <TechnologiesCard key={idx} technology={technology} selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
                    ))}
                </div>
            </div>

            {/* right */}
            <div className="grid col-span-3">
                <SelectedStack selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
            </div>
        </div>
    </div>
  );
};

export default Technologies;
