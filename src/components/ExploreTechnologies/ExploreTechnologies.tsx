import { use, useState } from "react";
import type { technologyType } from "../../type"
import TechnologyCard from "./technologyCard";
import YourStack from "./yourStack";

export interface ExploreTechnologiesProps {
  promiseData: Promise<technologyType[]>;
}

export default function ExploreTechnologies({ promiseData }: ExploreTechnologiesProps) {
  const technologyData = use(promiseData);

  const[yourStack, setYourStack]=useState<technologyType[]>([]);
 
   const handleAddToStack=(technology:technologyType)=>{
        setYourStack([...yourStack,technology]);
   }

   const handleRemove=(id:string)=>{
    setYourStack((previousStack=>previousStack.filter(technology=>technology.id!=id)));
   }
   const handleRemoveAll=()=>{
    setYourStack([]);
   }
  return (
    <div>
      <h1 className="font-bold text-[36px]">Explore the <span className="text-[#D64EB5]">Technologies</span>
      </h1>
      <p className="text-gray-500">Pick one Technology per category to build your ideal stack</p>

      <div className="flex items-start mt-15 gap-7">
        <div className="grid grid-cols-3 gap-1.5  flex-3">
          {technologyData.map(technology => (<TechnologyCard key={technology.id} yourStack={yourStack} technology={technology} handleAddToStack={handleAddToStack}></TechnologyCard>))}

        </div>
        <div className="flex-1 border border-black rounded-lg p-4 h-90">
          <YourStack handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} yourStack={yourStack}></YourStack>
        </div>
      </div>

    </div>
  )
}
