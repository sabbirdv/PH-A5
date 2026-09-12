import logo from './assets/logo-text.png'
import hamburger from './assets/hamburger.png'

const Nav = () => {
    return (
        <div className="w-full bg-white sticky top-0 z-30">
            <nav className="container mx-auto max-sm:px-3 max-md:px-10 flex justify-between items-center gap-5">
                <img src={hamburger} alt="hamburger" />
                <a href="#"><img className='my-6' src={logo} alt="logo" /></a>
                <ul className='nav_links lg:flex items-center gap-7 hidden  '>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Content</a></li>
                </ul>
                <div className='flex items-center gap-5 text-nowrap'>
                    <button className='cursor-pointer text-[#334155]'>Sign In</button>
                    <button className='cursor-pointer px-5 py-2.5 bg-[#D91B7E] text-white rounded-full'>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav; 