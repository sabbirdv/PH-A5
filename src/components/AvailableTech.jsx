
import AvailableTechCard from "./AvailableTechCard";




const AvailableTech = ({techDatas,selectedTech, setSelectedTech}) => {



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
            techDatas.map((techData)=><AvailableTechCard key={techData.id} 
            techData={techData} selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>)
        }

        </div>
    );
};

export default AvailableTech;