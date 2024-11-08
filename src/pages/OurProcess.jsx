export default function OurProcess() {
    return(
        <main className="bg-gradient-to-b from-[#4528B6] to-[#1E1250]">
            <img src="/backgrounds/smoke background.png" className="absolute w-full" />
            
            <div className="text-center pt-56 space-y-3">
                <h1 className="font-pg text-4xl text-white">OUR PROCESS</h1>
                <p className="font-dhyana text-lg text-white">Ready to grow your cannabis brand?<br />Here’s how we work together:</p>
            </div>

            <section className="mt-20">
                <div className="grid place-items-center">
                    {/* <svg width="500" height="400" viewBox="0 0 1335 663" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20">
                        <path d="M53 26.2688C245 -14.0001 304.561 4.69145 523.5 26.2688C744 47.9999 920.5 26.2688 994 26.2688" stroke="#DAD7FF" stroke-width="4" stroke-dasharray="15 15"/>
                        <path d="M1085 14.9988C1185.5 -16.0009 1333 24.0019 1333 302C1333 626.084 1147.5 656.332 1075 636.998C1019.83 624.998 885.7 601.298 790.5 602.498C695.3 603.698 570.833 625.998 520.5 636.998C482.333 644.832 376.1 660.498 256.5 660.498C136.9 660.498 36 644.832 0.5 636.998" stroke="#DAD7FF" stroke-width="4" stroke-dasharray="15 15"/>
                    </svg> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        <div className="flex flex-col items-center">
                            <span className="bg-[#DAD7FF] rounded-full w-12 h-12 flex items-center justify-center font-semibold text-[#29186D] text-2xl">1</span>
                            <div className="bg-[#29147B] flex flex-col items-center justify-center w-[21rem] h-80 px-10 rounded-xl">
                                <img src="/icons/icon9.png" className="size-20" />
                                <h1 className="font-dhyana text-white text-2xl my-4">Email Marketing Audit</h1>
                                <p className="font-dhyana text-white text-center">Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="bg-[#DAD7FF] rounded-full w-12 h-12 flex items-center justify-center font-semibold text-[#29186D] text-2xl">2</span>
                            <div className="bg-[#29147B] flex flex-col items-center justify-center w-[21rem] h-80 px-10 rounded-xl">
                                <img src="/icons/icon10.png" className="size-20" />
                                <h1 className="font-dhyana text-white text-2xl my-4">Email Marketing Audit</h1>
                                <p className="font-dhyana text-white text-center">Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="bg-[#DAD7FF] rounded-full w-12 h-12 flex items-center justify-center font-semibold text-[#29186D] text-2xl">3</span>
                            <div className="bg-[#29147B] flex flex-col items-center justify-center w-[21rem] h-80 px-10 rounded-xl">
                                <img src="/icons/icon11.png" className="size-20" />
                                <h1 className="font-dhyana text-white text-2xl my-4">Email Marketing Audit</h1>
                                <p className="font-dhyana text-white text-center">Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="bg-[#DAD7FF] rounded-full w-12 h-12 flex items-center justify-center font-semibold text-[#29186D] text-2xl">4</span>
                            <div className="bg-[#29147B] flex flex-col items-center justify-center w-[21rem] h-80 px-10 rounded-xl">
                                <img src="/icons/icon12.png" className="size-20" />
                                <h1 className="font-dhyana text-white text-2xl my-4">Email Marketing Audit</h1>
                                <p className="font-dhyana text-white text-center">Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="bg-[#DAD7FF] rounded-full w-12 h-12 flex items-center justify-center font-semibold text-[#29186D] text-2xl">5</span>
                            <div className="bg-[#29147B] flex flex-col items-center justify-center w-[21rem] h-80 px-10 rounded-xl">
                                <img src="/icons/icon13.png" className="size-20" />
                                <h1 className="font-dhyana text-white text-2xl my-4">Email Marketing Audit</h1>
                                <p className="font-dhyana text-white text-center">Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="bg-[#DAD7FF] rounded-full w-12 h-12 flex items-center justify-center font-semibold text-[#29186D] text-2xl">6</span>
                            <div className="bg-[#29147B] flex flex-col items-center justify-center w-[21rem] h-80 px-10 rounded-xl">
                                <img src="/icons/icon14.png" className="size-20" />
                                <h1 className="font-dhyana text-white text-2xl my-4">Email Marketing Audit</h1>
                                <p className="font-dhyana text-white text-center">Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-28">
                        <button className="bg-white font-poppins text-[#4528B6] font-semibold px-16 py-4 border-[1.5px] rounded-xl hover:bg-transparent hover:border-white hover:text-white">GET STARTED NOW</button>
                    </div>
                </div>
                
            </section>

            <img src="/backgrounds/smoke background2.png" />
        </main>
    )
}