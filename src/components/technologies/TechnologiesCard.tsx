import type { ITechnologies } from "../../types/Type";


const TechnologiesCard = ({technology}: {technology: ITechnologies}) => {
    return (
            <div className="flex flex-col h-full space-y-5 border border-gray-200 rounded-2xl p-4
                transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-gray-200 font-jakarta">
                <div className="flex justify-between items-center">
                    <img src={technology.icon} alt={technology.name} className="w-[35px] h-[35px]"/>
                    <span className="rounded-lg text-xs px-2 py-1 font-medium" style={{backgroundColor: technology.badgeBg, color: technology.badgeColor}}>
                        {technology.badge}
                    </span>
                </div>
                <div>
                    <h2 className="font-bold text-md">{technology.name}</h2>
                    <p className="text-[#64748B] text-[13px]">{technology.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-[#64748B] text-xs font-semibold bg-[#F1F5F9] px-2 rounded">{technology.category}</span>
                    <span className="text-[#64748B] text-xs font-semibold">{technology.difficulty}</span>
                    <span className="text-xs font-bold">⭐ {technology.rating}</span>
                </div>
                <button className="btn bg-black text-white rounded-xl font-light">
                    Add to Stack
                </button>
            </div>
    );
};

export default TechnologiesCard;