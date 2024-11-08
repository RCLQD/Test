export default function WhatWeDo() {
    return(
        <main className="relative min-h-screen">
            <div className="relative text-center pt-40 bg-custom-image bg-cover h-full bg-center z-0">
                <img src="/backgrounds/smoke background.png" className="absolute w-full top-0 z-10" />

                <div className="text-center px-12 lg:px-[22rem]">
                    <h1 className="font-pg text-lg md:text-3xl text-[#4528B6]">Full Stack Email & SMS</h1>
                    <p className="font-dhyana text-[10px] md:text-lg text-[#4528B6]">We create your strategy, craft compelling copy, design engaging emails, and constantly measure, analyze, test, and optimize your campaigns to keep your brand ahead of the competition.</p>
                </div>

                <section className="grid grid-cols-1 px-10 lg:px-[14rem] my-10 gap-5">
                    <div className="bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE] p-4 md:p-7 rounded-xl flex z-50">
                        <div className="w-2/5 flex items-center">
                            <img src="/assets/image1.png" alt="image1" className="w-full h-auto" />
                        </div>
                        <div className="w-3/5 px-4 md:px-10 flex flex-col justify-center gap-1 md:gap-2">
                            <div className="flex items-center gap-x-3">
                                <img src="/icons/icon5.png" alt="" className="size-7 md:size-14" />
                                <h1 className="font-dhyana text-[#4528B6] text-[10px] md:text-2xl font-semibold">Brand Strategy</h1>
                            </div>
                            <div className="text-start">
                                <p className="font-dhyana text-[6px] md:text-sm lg:text-lg text-[#4528B6]">Our team understands the cannabis industry's unique regulations and challenges. We create tailored strategies to increase your brand’s presence and revenue, while ensuring full compliance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE] p-4 md:p-7 rounded-xl flex z-50">
                        <div className="w-2/5 flex items-center">
                            <img src="/assets/image2.png" alt="image2" className="w-full h-auto" />
                        </div>
                        <div className="w-3/5 px-4 md:px-10 flex flex-col justify-center gap-1 md:gap-2">
                            <div className="flex items-center gap-x-3">
                                <img src="/icons/icon6.png" alt="" className="size-7 md:size-14" />
                                <h1 className="font-dhyana text-[#4528B6] text-[10px] md:text-2xl font-semibold">Brand Strategy</h1>
                            </div>
                            <div className="text-start">
                                <p className="font-dhyana text-[6px] md:text-sm lg:text-lg text-[#4528B6]">We craft engaging, compliant copy that resonates with your audience and adheres to industry regulations. Overcome the limitations of social media and paid ads with our expert copy.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE] p-4 md:p-7 rounded-xl flex z-50">
                        <div className="w-2/5 flex items-center">
                            <img src="/assets/image3.png" alt="image3" className="w-full h-auto" />
                        </div>
                        <div className="w-3/5 px-4 md:px-10 flex flex-col justify-center gap-1 md:gap-2">
                            <div className="flex items-center gap-x-3">
                                <img src="/icons/icon7.png" alt="" className="size-7 md:size-14" />
                                <h1 className="font-dhyana text-[#4528B6] text-[10px] md:text-2xl font-semibold">Brand Strategy</h1>
                            </div>
                            <div className="text-start">
                                <p className="font-dhyana text-[6px] md:text-sm lg:text-lg text-[#4528B6]">Our designs stand out and drive engagement, focusing on creativity and compliance. Navigate email provider restrictions with our expertly crafted emails.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE] p-4 md:p-7 rounded-xl flex z-50">
                        <div className="w-2/5 flex items-center">
                            <img src="/assets/image4.png" alt="image4" className="w-full h-auto" />
                        </div>
                        <div className="w-3/5 px-4 md:px-10 flex flex-col justify-center gap-1 md:gap-2">
                            <div className="flex items-center gap-x-3">
                                <img src="/icons/icon8.png" alt="" className="size-7 md:size-14" />
                                <h1 className="font-dhyana text-[#4528B6] text-[10px] md:text-2xl font-semibold">Brand Strategy</h1>
                            </div>
                            <div className="text-start">
                                <p className="font-dhyana text-[6px] md:text-sm lg:text-lg text-[#4528B6]">Leave the heavy lifting to us! We manage your Klaviyo account, ensuring optimal performance and compliance with cannabis industry regulations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 z-50">
                        <button className="bg-[#4528B6] text-white font-poppins md:text-2xl px-12 py-3 border-[1.5px] rounded-xl cursor-pointer hover:bg-transparent hover:border-[#4528B6] hover:text-[#4528B6]">
                            FREE CONSULTATION
                        </button>
                    </div>
                </section>
                <div className="w-full">
                    <img src="/src/assets/Rectangle.png" className="w-full h-auto object-cover" />
                </div>
            </div>
        </main>
    )
}