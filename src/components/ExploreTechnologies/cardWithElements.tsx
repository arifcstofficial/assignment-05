
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
                <h1>Your Stack</h1>
                <p>{yourStack.length} Technology Selected</p>
                <div className="grid grid-cols-1 gap-2 ">
                    {
                        yourStack.map(technology => (
                            <YourStackCard key={technology.id} handleRemove={handleRemove} technology={technology}></YourStackCard>
                        ))
                    }
                </div>

            </div>
            <button onClick={()=>handleRemoveAll()}className="btn btn-wide bg-white border border-red-500 text-red-500">Remove All</button>
        </>
    );
}