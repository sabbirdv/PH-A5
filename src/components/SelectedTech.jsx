import SelectedTechCard from "./SelectedTechCard";


const SelectedTech = ({selectedTech, setSelectedTech}) => {

    const handleRemoveAll = (setSelectedTech)=>{
        setSelectedTech([])

    }

    return (
        
        <div className="flex justify-center w-full">
            <div className="flex flex-col gap-1.5 justify-center p-4 border-2 border-[#F1F5F9] rounded-xl w-full">
                <h3 className="text-[#0F172A] text-lg font-semibold">Your Stack</h3>
                <p className="text-[#94A3B8]">{selectedTech.length == 0 ? `No technologies selected yet.` : `${selectedTech.length} technologies selected.`}</p>
                <div>
                    
                    <div className="border border-dashed border-[#94A3B8] rounded-xl flex justify-center items-center w-full py-5 mt-2">
                        <p className="text-[#94A3B8]">Your stack is empty.</p>
                    </div>

                    <div className="flex flex-col gap-1 mt-2 mb-3">
                        {
                            selectedTech.map((tech)=>{
                                return <SelectedTechCard key={tech.id} tech={tech} 
                                selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
                            })
                        }
                        
                    </div>
                    <div>
                        <button className="py-2 w-full mt-auto flex justify-center items-center border-2 border-[#ED8C85] rounded-xl font-semibold text-[#D82C20} cursor-pointer"
                        onClick={()=>{handleRemoveAll(setSelectedTech)}}
                        >Remove All</button>
                    </div>


                </div>
            </div>
            
        </div>
    );
};

export default SelectedTech;