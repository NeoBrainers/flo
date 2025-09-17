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
                            <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">AI-Powered Financial Guidance.</h2>
                            <p className="text-xl leading-relaxed text-gray-400 mt-4">Ask any question from investment strategies to market trends and get instant, expert-level insights.</p>
                            <p className="mt-4 text-xl leading-relaxed text-gray-400">Learn & grow — Make smarter financial decisions over time</p>
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
                            <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">Real-Time Market Updates & Alerts.</h2>
                            <p className="text-xl leading-relaxed text-gray-400 mt-4">Stay ahead with AI-curated news, stock alerts, and financial trends to make data-driven decisions.</p>
                            <p className="mt-4 text-xl leading-relaxed text-gray-400">Varasity continuously monitors the markets, filtering out the noise and delivering only relevant, actionable insights — so you never miss an opportunity.</p>
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
                            <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">Always Available, Anytime You Need</h2>
                            <p className="text-xl leading-relaxed text-gray-400 mt-4">24/7 access to your personal AI financial assistant—no need to schedule appointments or wait for market updates.</p>
                            <p className="mt-4 text-xl leading-relaxed text-gray-400">Finance never sleeps, and neither does your AI-powered investing partner.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Content