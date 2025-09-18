import oceanPattern from "@/assets/ocean-pattern.png";

function Content(){
    return(
        <>
            <section id="features" className=" scroll-smooth py-5 bg-black  sm:py-16 lg:py-4">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <div className="pl-28 pr-6">
                                <img className="relative h-96" src={oceanPattern} alt="" />
                            </div>
                          
                        </div>

                        <div className="2xl:pl-16">
                            <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">Natural Language Queries</h2>
                            <p className="text-xl leading-relaxed text-gray-400 mt-4">Ask questions about ocean data in plain English and get instant answers</p>
                            <p className="mt-4 text-xl leading-relaxed text-gray-400">No programming skills are needed—simply ask and explore</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-black  sm:py-16 lg:py-4">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12 xl:col-end-auto">
                            <div className="pl-28 pr-6">
                                <img className="relative h-96" src={oceanPattern} alt="" />
                            </div>
                            
                        </div>
                        <div className="2xl:pl-16 xl:col-start-auto">
                            <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">Interactive Data Insights</h2>
                            <p className="text-xl leading-relaxed text-gray-400 mt-4">Visualize ocean patterns, float profiles, and trends directly in your browser.</p>
                            <p className="mt-4 text-xl leading-relaxed text-gray-400">Make sense of complex ocean data with easy-to-read charts and graphs.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-5 bg-black  sm:py-16 lg:py-4">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12 xl:col-end-auto">
                            <div className="pl-28 pr-6">
                                <img className="relative h-96" src={oceanPattern} alt="" />
                            </div>
                        
                        </div>
                        <div className="2xl:pl-16 xl:col-start-auto">
                            <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">Seamless Data Access</h2>
                            <p className="text-xl leading-relaxed text-gray-400 mt-4">Access global ARGO float data instantly without downloading large files.</p>
                            <p className="mt-4 text-xl leading-relaxed text-gray-400">Explore, filter, and analyze datasets with a few clicks.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Content