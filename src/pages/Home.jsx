import '../index.css'
import asset from '../assets/asset.png'
import L1 from '../assets/Layer1.png'
import L2 from '../assets/Layer2.png'
import L3 from '../assets/Layer3.png'
import L4 from '../assets/Layer4.png'

export default function Home() {
    return (
        <div className="relative min-h-screen">
            <main className="relative z-10 text-center pt-24 lg:pt-40 bg-custom-image bg-cover h-full bg-center">
                <div>
                    <h1 className="font-pg text-[#4528B6] text-[14px] md:text-[30px] lg:text-[40px] leading-tight">EMAIL & SMS EXPERTS FOR</h1>
                    <h2 className="font-pg text-black text-[24px] md:text-[50px] lg:text-[80px] leading-tight">CANNABIS BRANDS</h2>
                    <p className='font-dhyana px-10 md:px-20 lg:px-72 mt-3 md:mt-5 text-[9px] md:text-lg'>
                        We specialize in crafting compliant, results-driven email and SMS campaigns specifically for cannabis brands. We help you overcome social media restrictions, banned substance regulations, and email provider limitations. Boost your brand's revenue, engage your customers, and turn your email subscribers into loyal customers.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center md:gap-x-3 gap-y-2 px-12 mt-5 md:mt-10">
                        <button className='bg-[#4528B6] px-4 md:px-8 py-2 rounded-lg text-white text-[12px] md:text-lg border-[1.5px] hover:bg-transparent hover:border-[#4528B6] hover:text-[#4528B6]'>INCREASE MY REVENUE</button>
                        <button className='border-[1.5px] border-black px-8 lg:px-14 py-2 text-[12px] md:text-lg rounded-lg hover:bg-black hover:text-white'>HOW IT WORKS</button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src={asset} className='w-full' />
                </div>
            </main>
            
            <section className='flex justify-center items-center py-20'>
                <div className='px-8 md:px-20 space-y-8'>
                    <div className='shadow-md border rounded-md flex flex-col lg:flex-row lg:justify-between items-center gap-y-5 py-5 px-8 bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE]'>
                        <span className='w-full flex justify-center lg:block lg:w-1/4'>
                            <img src={L1} className='w-[100px] md:w-[200px] h-auto' />
                        </span>
                        <span className='w-full lg:w-3/5 flex justify-between'>
                            <img src={L2} className='w-[60px] md:w-[120px] h-auto' />
                            <img src={L3} className='size-8 md:size-16' />
                            <img src={L4} className='w-[60px] md:w-[120px] h-auto' />
                        </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-7'>
                        <div className='bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE] grid place-items-center p-5 gap-y-2 w-full rounded-md shadow-md'>
                            <img src="/icons/icon1.png" alt="" width="55" height="57"/>
                            <p className='text-sm md:text-lg uppercase font-dhyana text-[#4528B6] font-semibold text-center'>Market & Regulations Compliant</p>
                        </div>
                        <div className='bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE] grid place-items-center p-5 gap-y-2 w-full rounded-md shadow-md'>
                            <img src="/icons/icon2.png" alt="" width="55" height="57"/>
                            <p className='text-sm md:text-lg uppercase font-dhyana text-[#4528B6] font-semibold text-center'>Attorney Reviewed Content</p>
                        </div>
                        <div className='bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE] grid place-items-center p-5 gap-y-2 w-full rounded-md shadow-md'>
                            <img src="/icons/icon3.png" alt="" width="55" height="57"/>
                            <p className='text-sm md:text-lg uppercase font-dhyana text-[#4528B6] font-semibold text-center'>Guaranteed Email Deliverability</p>
                        </div>
                        <div className='bg-gradient-to-b from-[#F3F2F8] to-[#E4E1EE] grid place-items-center p-5 gap-y-2 w-full rounded-md shadow-md'>
                            <img src="/icons/icon4.png" alt="" width="55" height="57"/>
                            <p className='text-sm md:text-lg uppercase font-dhyana text-[#4528B6] font-semibold text-center'>Increase customers & revenue</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}