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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-2 mt-6 md:mt-16 w-full">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center md:text-left font-bold tracking-tight">
        Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
    </h1>
    <p className="text-[#64748B] text-xs sm:text-sm md:text-base text-center md:text-left font-jakarta">
        Pick one technology per category to build your ideal stack.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 pt-6 md:pt-10">
        {/* left */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-6 justify-items-center">
                {technologies.map((technology: ITechnologies, idx: number) => (
                    <TechnologiesCard 
                        key={idx} 
                        technology={technology} 
                        selectedStack={selectedStack} 
                        setSelectedStack={setSelectedStack} 
                    />
                ))}
            </div>
        </div>

        {/* right */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 h-fit sticky top-22">
            <SelectedStack selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
        </div>
        
    </div>
</div>

  );
};

export default Technologies;
