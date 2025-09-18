import { useState } from "react";
import oceanPattern from "@/assets/ocean-pattern.png";
function Hero(){

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="scroll-smooth m-0 p-0 max-w-screen bg-black">
                <header className="py-4 bg-black sm:py-6">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="shrink-0 ">
                                <a href="#" title="" className="flex justify-between items-center">
                                    <img className="w-auto h-12" src={oceanPattern} alt="wave" />
                                   <h1 className="text-white text-3xl font-condiment align-center">FLo</h1>
                                </a>
                            </div>

                            <div className="flex md:hidden">
                                <button
                                    type="button"
                                    className="text-white"
                                    onClick={() => setExpanded(!expanded)}
                                    aria-expanded={expanded}>
                                    {!expanded ? (
                                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        ) : (
                                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                </button>
                            </div>

                            <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
                                <a href="#features" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>
                                <a href="#support" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
                            </nav>
                        </div>

                        {expanded && (
                            <nav className="flex flex-col pt-8 pb-4 space-y-6">
                                <a href="#features" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>
                                <a href="#support" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
                            </nav>
                        )}
                    </div>
                </header>

                <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="relative">
                            <div className="lg:w-2/3">
                                <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                                    Explore ARGO Ocean Data Instantly with AI
                                </p>
                                <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                                    Introducing&nbsp;
                                    <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500 font-condiment">
                                        FLo
                                    </span>
                                </h1>
                                <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8 md:ml-20 lg:ml-20">
                                    Ask questions, visualize trends, and gain insights from global ARGO float datasets
                                </p>
                                <div className="relative inline-flex items-center justify-center  mt-8 sm:mt-12 group">
                                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-blue-500 to-yellow-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                    <a href="/home" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full">
                                        Explore Ocean Insights
                                    </a>
                                </div>

                                <div>
                                    <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-400 sm:pt-10 sm:mt-14">
                                        <svg className="w-6 h-6 border-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="#f9f7f3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="ml-2 text-base font-normal text-white">
                                            Dive in to the world of Seas
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 md:absolute md:mt-0 lg:top-0 md:right-0 sm:invisible md:invisible lg:visible xl:visible ">
                                <img className="w-full sm:max-w-xs mx-auto lg:mx-w-md xl:max-w-md"
                                     src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero;