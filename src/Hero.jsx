import heroImg from './assets/banner-stack.png';

const Hero = () => {
    return (
        <div className='md:flex-row flex flex-col justify-between items-center mt-20 max-sm:px-5 max-md:px-10 container  mx-auto'>
            <div className='max-w-140 max-sm:text-center'>
                <h1 className='text-[#0F172A] text-6xl font-bold mb-5 '>
                    Build Your Ideal <br />
                    <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]  bg-clip-text text-transparent'>Development Stack</span>
                </h1>
                <p className='text-[#475569] mb-10'>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className='flex flex-col sm:flex-row max-sm:items-center items-center gap-3 text-nowrap'>
                    <button className=' flex justify-center items-center  text-white font-medium p-3 h-10 w-43 rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] cursor-pointer max-sm:w-full'>Explore Technologies</button>
                    <button className='flex justify-center items-center  text-[#374151] hover:text-white font-medium p-3 h-10 w-43 rounded-md border border-[#E5E7EB]  cursor-pointer hover:bg-linear-to-r from-[#F97316] to-[#EC4899] max-sm:w-full'>Learn More</button>
            </div>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
            
        </div>
    );
};

export default Hero;