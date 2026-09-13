export function EmptyStackCard() {
    
    return(<>
    <div>
        <h1 className="font-bold text-4xl">Your Stack</h1>
        <p className="text-gray-500 mb-3">No Technologies Selected Yet</p>
         <div className="divider"></div>
    </div>
    <div className="flex justify-center items-center my-auto mx-auto">
        <div className="font-bold text-2xl border p-4 rounded-2xl">Your Stack is Empty</div>
    </div>
            

    </>);
}