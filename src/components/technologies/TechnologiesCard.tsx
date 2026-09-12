import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../../types/Type";
import { toast } from "react-toastify";

interface ITechnologyProps {
    technology: ITechnologies,
    selectedStack: ITechnologies[],
    setSelectedStack: Dispatch<SetStateAction<ITechnologies[]>>
}

const TechnologiesCard = ({technology, selectedStack, setSelectedStack}: ITechnologyProps) => {

    const isSelected = selectedStack.includes(technology);

    const handleSelectedStack = () => {
        setSelectedStack((stack) => [...stack, technology]);
        toast.success(`${technology.name} added Successfully!`, {position: "bottom-right"});
    };

    return (
            <div className={`flex flex-col h-full space-y-5 rounded-2xl p-4 font-jakarta
                ${isSelected? "border-2 border-pink-400" : "border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-gray-200"}`}>
                <div className="flex justify-between items-center">
                    <img src={technology.icon} alt={technology.name} className="w-8.75 h-8.75"/>
                    <span className="rounded-lg text-xs px-2 py-1 font-medium" style={{backgroundColor: technology.badgeBg, color: technology.badgeColor}}>
                        {technology.badge}
                    </span>
                </div>
                <div>
                    <h2 className="font-bold text-lg">{technology.name}</h2>
                    <p className="text-[#1b2637] text-[13px]">{technology.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-[#64748B] text-xs font-semibold bg-[#F1F5F9] px-2 rounded">{technology.category}</span>
                    <span className="text-[#64748B] text-xs font-semibold">{technology.difficulty}</span>
                    <span className="text-xs font-bold">⭐ {technology.rating}</span>
                </div>
                <button onClick={() => handleSelectedStack()} className={`btn rounded-xl cursor-pointer ${isSelected? "bg-purple-100 text-pink-600 font-semibold " : "bg-black text-white font-light" }`} disabled={isSelected}>
                    {isSelected? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
    );
};

export default TechnologiesCard;