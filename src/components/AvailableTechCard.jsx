import { useState } from "react";
import { FaStar } from "react-icons/fa";
import {toast, Bounce } from 'react-toastify';


const AvailableTechCard = ({techData, selectedTech, setSelectedTech}) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleStackBtn = (techData, selectedTech, setSelectedTech)=>{

        setIsSelected(true)
        setSelectedTech([...selectedTech,techData])
            toast.success(`${techData.name} adden in stack`, {
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
        <div className="p-4 border-2 border-[#F1F5F9] rounded-xl relative flex flex-col gap-3">
            <div className="badge absolute top-4 right-4 border border-sky-200 rounded-full bg-sky-100 text-sky-500 bg-">{techData.badge}</div>
            <img className="size-10" src={techData.icon} alt="" />
            <h2 className="text-lg font-bold text-[#0F172A]">{techData.name}</h2>
            <p className="text-[#64748B] text-sm">{techData.description}</p>

            <div className="flex justify-between gap-1 items-center text-xs mt-auto">
                <p className="py-0.5 px-3 bg-gray-100 border border-gray-200 rounded-md">{techData.category}</p>
                <p className="py-0.5 px-3 bg-gray-100 border border-gray-200 rounded-md">{techData.difficulty}</p>
                <p className="flex items center gap-1"><FaStar className="text-yellow-400" />{techData.rating}</p>
            </div>
            <button className=" btn p-2 flex justify-center items-center cursor-pointer disabled:bg-gray-200 bg-[#0F172A] text-white disabled:text-gray-400 rounded-xl "
            onClick={()=>handleStackBtn(techData, selectedTech, setSelectedTech)}
            disabled ={isSelected}
            >Add to Stack</button>
            
        </div>
    );
};

export default AvailableTechCard;