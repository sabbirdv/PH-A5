import logo from './assets/logo-text.png'
import hamburger from './assets/hamburger.png'

const Nav = () => {
    return (
        <div className="w-full bg-white sticky top-0 z-30">
            <nav className="container mx-auto max-sm:px-3 max-md:px-10 flex justify-between items-center gap-5">
                <div className="dropdown  lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <img  aria-label="Menu" src={hamburger} alt="hamburger" />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <ul>                        
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Content</a></li>
                        </ul>
                    </ul>
                </div>
                
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




    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
