import { IoMdClose } from "react-icons/io";
import {toast, Bounce } from 'react-toastify';


const SelectedTechCard = ({tech, selectedTech, setSelectedTech}) => {

    const handleCloseBtn = (tech, selectedTech, setSelectedTech)=>{
        setSelectedTech(selectedTech.filter((item)=> item != tech))

        toast.info(`${tech.name} removed from stack`, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });

    }

    
    return (
        <div className="p-2.5 rounded-xl border-2 border-[#E2E8F0] flex items-center gap-2">
            <img className="size-8 rounded-lg" src={tech.icon} alt="" />
            <div>
                <h2 className="text-[#0F172A] font-semibold">{tech.name}</h2>
                <p className="text-[#94A3B8] text-xs">{tech.category}</p>
            </div>
            <div className="text-[#94A3B8] text-2xl ml-auto cursor-pointer"
            onClick={()=>{handleCloseBtn(tech, selectedTech, setSelectedTech)}}
            ><IoMdClose /></div>
        </div>
    );
};

export default SelectedTechCard;