import '../index.css';

export default function CaseStudy() {
  return (
    <main id="casestudy" className="relative">
        <img
          src="/backgrounds/background.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <section className="py-20 relative">
          <h1 className="text-center text-xl md:text-[40px] text-white font-pg">OUR SUCCESS STORIES</h1>
          <p className="text-center text-sm md:text-xl text-white font-dhyana">WILL YOU BE NEXT?</p>

          <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between gap-5 px-30 lg:px-40 mt-12">
            <div className="bg-white rounded-lg p-5 md:w-[45%] lg:w-2/6 space-y-3 text-center">
              <img src="/assets/pic1.png" alt="pic1" width="250" height="180" className="mx-auto rounded-md" />
              <p className="text-[#4528B6] font-dhyana text-xl">Jeeter Cannabis</p>
              <button className="bg-[#4528B6] font-poppins text-white font-medium border-[1.5px] rounded-lg px-8 py-2 hover:bg-transparent hover:text-[#4528B6] hover:border-[#4528B6]">
                EXPLORE
              </button>
            </div>
            <div className="bg-white rounded-lg p-5 md:w-[45%] lg:w-2/6 space-y-3 text-center">
              <img src="/assets/pic2.png" alt="pic2" width="250" height="180" className="mx-auto rounded-md" />
              <p className="text-[#4528B6] font-dhyana text-xl">Destino Farms</p>
              <button className="bg-[#4528B6] font-poppins text-white font-medium border-[1.5px] rounded-lg px-8 py-2 hover:bg-transparent hover:text-[#4528B6] hover:border-[#4528B6]">
                EXPLORE
              </button>
            </div>
            <div className="bg-white rounded-lg p-5 md:w-[45%] lg:w-2/6 space-y-3 text-center">
              <img src="/assets/pic3.png" alt="pic3" width="250" height="180" className="mx-auto rounded-md" />
              <p className="text-[#4528B6] font-dhyana text-xl">CannaWholesalers</p>
              <button className="bg-[#4528B6] font-poppins text-white font-medium border-[1.5px] rounded-lg px-8 py-2 hover:bg-transparent hover:text-[#4528B6] hover:border-[#4528B6]">
                EXPLORE
              </button>
            </div>
          </div>
        </section>

      <section className="bg-white py-20">
        <h1 className="text-center text-xl md:text-2xl font-pg text-[#4528B6]">OUR TECH PARTNERS</h1>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 px-10 md:px-14 lg:px-20 py-4'>
            <img src="/assets/img1.png" alt="img1" className='h-24 w-full' />
            <img src="/assets/img2.png" alt="img2" className='h-24 w-full' />
            <img src="/assets/img3.png" alt="img3" className='h-24 w-full' />
            <img src="/assets/img4.png" alt="img4" className='h-24 w-full' />
            <img src="/assets/img5.png" alt="img5" className='h-24 w-full' />
        </div>
      </section>
    </main>
  );
}