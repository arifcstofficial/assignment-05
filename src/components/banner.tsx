import banner from "../assets/banner.png"

function Banner() {

    return (
        <section className="grid grid-cols-2">
            <div className="mt-28">
                <h1 className="font-bold text-[60px] leading-8">Build Your Ideal <br/>
                <span className="mt-1 font-bold text-[60px] leading-tight bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">Development Stack</span></h1>
                
                <p className="my-5">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                
                    <div className="flex gap-4 mt-15">
                        <button className="btn btn-active bg-[image:var(--brand-gradient)] text-white rounded-2xl">Explore Technologies</button>
                        <button className="btn btn-outline">Learn More</button>
                    </div>
                    
            </div>
            <div>
                <img src={banner} alt="Banner-Image"></img>
            </div>
        </section>
    );
}


export default Banner;