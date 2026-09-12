import { use } from "react";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";



const Technologies = ({techPromise,selectedTech,setSelectedTech}) => {

    const techDatas = use(techPromise)



    return (
        <div className="container mx-auto mt-28">
            <div>
                <h2 className="text-4xl font-bold text-[#0F172A]">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-lg text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-10">
                <div className="col-span-3">
                   <AvailableTech techDatas={techDatas} selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>
                </div>
                <div className="col-span-1">
                    <SelectedTech selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
                </div>
            </div>
        </div>
    );
};

export default Technologies;