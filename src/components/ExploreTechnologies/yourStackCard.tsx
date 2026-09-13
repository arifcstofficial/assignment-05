
import type { technologyType } from "../../type"
import { IoClose } from "react-icons/io5";

export interface YourStackCardProops {
    technology: technologyType;
    handleRemove:(id:string)=>void;

}
export function YourStackCard({ technology,handleRemove }: YourStackCardProops) {
  
    
    return (
        <div className="flex p-3 justify-between border rounded-2xl">
            
                <div className="flex gap-2">
                    <img className="w-12 h-12" src={technology.icon}></img>
                    <div>
                        <p className="font-bold">{technology.name}</p>
                        <p className="text-gray-500">{technology.category}</p>
                    </div>
                </div>
                      
            <div className=" flex justify-center items-center">
                <button onClick={()=>handleRemove(technology.id)} className="text-4xl"><IoClose /></button>
            </div>

        </div>
    )
}