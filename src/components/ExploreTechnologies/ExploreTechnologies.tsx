import { use } from "react";
import type { technologyType } from "../../type"
import TechnologyCard from "./technologyCard";

export interface ExploreTechnologiesProps{
  promiseData:Promise<technologyType[]>;
}

export default function ExploreTechnologies({promiseData}:ExploreTechnologiesProps) {
  const technologyData=use(promiseData);
  return (
    <div>
        <h1 className="font-bold text-[36px]">Explore the <span className="text-[#D64EB5]">Technologies</span>
        </h1>
        <p className="text-gray-500">Pick one Technology per category to build your ideal stack</p>
        
        <div className="grid grid-cols-3 gap-1.5 mt-15">
                  {technologyData.map(technology=>(<TechnologyCard technology={technology}></TechnologyCard>))}       

        </div>
        

        </div>
  )
}
