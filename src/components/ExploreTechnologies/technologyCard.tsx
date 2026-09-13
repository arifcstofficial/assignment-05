import type { technologyType } from "../../type";
import { FcRating } from "react-icons/fc";

export interface technoloyCardProps{
    yourStack:technologyType[];
    technology:technologyType;
    handleAddToStack:(technology:technologyType)=>void;
}

function TechnologyCard({yourStack,technology,handleAddToStack}:technoloyCardProps) {

    const isSelected=yourStack.some(item=>item.id===technology.id);

     
    return(
    <div className="flex flex-col border  border-black rounded-lg p-4">

          
        <div>
            <div className="flex  justify-between">
            <img className="w=7 h-7 object-contain" src={technology.icon} ></img>
            <span className="badge badge-outline badge-primary">{technology.badge}</span>
            
           </div>

           <h1 className="font-semibold my-3">{technology.name}</h1>
           <p>{technology.description}</p>

           <div className="flex items-start justify-between my-3">
            <p className="badge badge-soft badge-accent">{technology.category}</p>
        
            <p className="text-gray-500">{technology.difficulty}</p>
            <p className="flex items-center gap-1"><FcRating />{technology.rating}</p>
          
           </div>

           <button 
           onClick={()=>handleAddToStack(technology)}
            disabled={isSelected}
            className="flex btn btn-wide rounded-full text-white bg-black disabled:bg-black/40"
            >
                {isSelected?"✔ Added to Stack":"Add to Stack"}
                
            </button>
            

        </div>          

    </div>); 
}

export default TechnologyCard;