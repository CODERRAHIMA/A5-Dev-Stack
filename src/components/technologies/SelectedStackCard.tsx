import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../../types/Type";
import { RxCross2 } from "react-icons/rx";

interface ISelectedStackCardProps {
    technology: ITechnologies,
    selectedStack: ITechnologies[],
    setSelectedStack: Dispatch<SetStateAction<ITechnologies[]>>,
}

const SelectedStackCard = ({technology, selectedStack, setSelectedStack}: ISelectedStackCardProps) => {

    const handleRemoveStack = () => {
        const updatedStack = selectedStack.filter((stack) => stack.name !== technology.name);
        setSelectedStack(updatedStack);
    }
    return (
        <div className="flex justify-between items-center border border-gray-300 p-3 rounded-2xl">
            <div className="flex gap-4 items-center">
                <img src={technology.icon} alt={technology.name} className="w-[35px] h-[35px]"/>
                <div>
                    <h2 className="font-bold text-sm">{technology.name}</h2>
                    <p className="text-[10px] text-[#94A3B8]">{technology.category}</p>
                </div>
            </div>
            <span onClick={handleRemoveStack} className="text-2xl text-gray-400 cursor-pointer">
                <RxCross2 />
            </span>
        </div>
    );
};

export default SelectedStackCard;