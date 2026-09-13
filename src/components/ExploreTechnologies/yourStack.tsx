import type { technologyType } from "../../type";
import { EmptyStackCard } from "./emptyStackCard";

import { CardWithElements } from "./cardWithElements";
export interface YourStackProps {
    yourStack: technologyType[];
    handleRemove:(id:string)=>void;
    handleRemoveAll:()=>void;
}

function YourStack({ yourStack,handleRemove,handleRemoveAll }: YourStackProps) {

    const isEmpty=(yourStack.length===0);
   

    return (<>
    {
        isEmpty?(<EmptyStackCard />):
         <CardWithElements
         yourStack={yourStack}
         handleRemove={handleRemove}
         handleRemoveAll={handleRemoveAll}
        />
        
    }
    </>
         
      
    )
}
export default YourStack;