
import { type technologyType } from "../../type";  
import { YourStackCard } from "./yourStackCard";

export interface CardWithElementsProps{
     yourStack:technologyType[];
      handleRemove:(id:string)=>void;
       handleRemoveAll:()=>void;
}

export function CardWithElements({yourStack,handleRemove,handleRemoveAll}:CardWithElementsProps) {
    
    return(
          <>
            <div>
                 <h1 className="font-bold text-4xl">Your Stack</h1>
                  <p className="text-gray-500 mb-3">{yourStack.length} Technology Selected Yet</p>
                    <div className="divider"></div>
                <div className="grid grid-cols-1 gap-2 ">
                    {
                        yourStack.map(technology => (
                            <YourStackCard key={technology.id} handleRemove={handleRemove} technology={technology}></YourStackCard>
                        ))
                    }
                </div>

            </div>
            <button onClick={()=>handleRemoveAll()}className="font-bold text-2xl btn btn-wide bg-white border border-red-500 rounded-[10-px] text-red-500 mt-auto">Remove All</button>
        </>
    );
}