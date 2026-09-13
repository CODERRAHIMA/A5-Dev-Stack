import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 font-jakarta text-sm w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          {/* Mobile dropdown */}
          <div className="flex items-center dropdown dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="text-2xl sm:text-3xl text-[#7B7171] p-1 cursor-pointer focus:outline-none"
            >
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu absolute left-1 sm:left-2 top-full mt-2 w-52 rounded-box bg-pink-50 p-4 shadow-xl border border-base-200 text-[#475569] font-semibold gap-2"
            >
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <img src={Logo} alt="brand-logo" className="w-auto h-7 sm:h-8 md:h-9 object-contain"/>

        {/* desktop */}
        <ul className="hidden md:flex justify-center gap-4 lg:gap-6 text-[#475569] font-semibold">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:text-[#D91B7E]">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* signup and signin */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="text-[#475569] text-xs sm:text-sm md:text-base font-semibold cursor-pointer hover:text-[#D91B7E]">
            Sign In
          </button>
          <button className="btn rounded-full text-xs sm:text-sm md:text-base px-3 md:px-5 bg-[#D91B7E] text-white font-semibold hover:bg-[#D91B7E]/80">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
