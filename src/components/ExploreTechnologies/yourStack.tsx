import type { technologyType } from "../../type";

export interface YourStackProps {
    yourStack:technologyType[];
}

function YourStack({yourStack}:YourStackProps){

    return (
    <>
        <div>
            <h1>Your Stack</h1>
            <p>{yourStack.length} Technology Selected</p>
            <div className="border border-violet-500">
                 {
            yourStack.map(technology=>(
                <div className="flex gap-2 border border-black">
                    <img className="w-12 h-12"  src={technology.icon}></img>
                   <div>
                     <p className="font-bold">{technology.name}</p> 
                     <p className="text-gray-500">{technology.category}</p> 
                   </div>
         
                </div>
            ))
         }
            </div>
        
        </div>
        <button className="btn btn-wide bg-white border border-red-500 text-red-500">Remove All</button>
    </>
    )
}
export default YourStack;