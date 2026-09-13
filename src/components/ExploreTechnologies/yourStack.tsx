import type { technologyType } from "../../type";
import { YourStackCard } from "./yourStackCard";

export interface YourStackProps {
    yourStack: technologyType[];
}

function YourStack({ yourStack }: YourStackProps) {

    return (
        <>
            <div>
                <h1>Your Stack</h1>
                <p>{yourStack.length} Technology Selected</p>
                <div className="grid grid-cols-1 gap-2 ">
                    {
                        yourStack.map(technology => (
                            <YourStackCard technology={technology}></YourStackCard>
                        ))
                    }
                </div>

            </div>
            <button className="btn btn-wide bg-white border border-red-500 text-red-500">Remove All</button>
        </>
    )
}
export default YourStack;