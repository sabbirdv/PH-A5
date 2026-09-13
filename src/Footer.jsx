import logo from './assets/logo-text.png'

const Footer = () => {
    return (
        <div className="container mx-auto pt-10 pb-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:grid-cols-5 pb-12 border-b border-gray-200 max-sm:px-5">
                <div className="col-span-1 sm:col-span-3 xl:col-span-2 space-y-2">
                    <img src={logo} alt="logo" />
                    <p className='text-[#64748B] text-sm'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className='flex items-center gap-3 text-sm font-semibold text-[#475569] mt-2'>
                        <a href="">Github</a>
                        <a href="">Twitter</a>
                        <a href="">Linkedin</a>
                    </div>
                </div>

                <div className="col-span-1">
                    <ul className='flex flex-col gap-1 text-sm text-[#64748B]'>
                        <li className='uppercase font-semibold text-[#0F172A] mb-1'>Product</li>
                        <li><a href="https://github.com/">Home</a></li>
                        <li><a href="https://github.com/">Technologies</a></li>
                        <li><a href="https://github.com/">Project</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className='flex flex-col gap-1 text-sm text-[#64748B]'>
                        <li className='uppercase font-semibold text-[#0F172A] mb-1'>Company</li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className='flex flex-col gap-1 text-sm text-[#64748B]'>
                        <li className='uppercase font-semibold text-[#0F172A] mb-1'>Legal</li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row max-sm:gap-3 justify-between items-center pt-6 max-sm:px-5'>
                <p className='text-sm text-[#64748B]'>© 2026 Dev Stack. All rights reserved.</p>
                <div className=' flex items-center gap-3 text-sm text-[#64748B]'>
                    <p><a href="#">Privacy</a></p>
                    <p><a href="#">Terms</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;