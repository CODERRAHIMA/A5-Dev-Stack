import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 font-jakarta text-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-4 ">
        <div className="flex items-center gap-2">
          {/* Mobile dropdown */}
          <div className="flex-none dropdown dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="text-3xl text-[#7B7171] pl-4 cursor-pointer focus:outline-none"
            >
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu absolute left-2 top-full mt-2 w-52 rounded-box bg-pink-50 p-4 shadow-xl border border-base-200 text-[#475569] font-semibold gap-2"
            >
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <img src={Logo} alt="brand-logo" className="w-25 md:w-fit h-7 md:h-fit"/>
        </div>

        {/* desktop */}
        <ul className="hidden md:flex justify-center gap-6 text-[#475569] font-semibold">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:text-[#D91B7E]">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* signup and signin */}
        <div className="flex gap-4 mr-2 md:mr-0">
          <button className="text-[#475569] font-semibold cursor-pointer hover:text-[#D91B7E]">
            Sign In
          </button>
          <button className="btn rounded-4xl px-5 bg-[#D91B7E] text-white font-semibold hover:bg-[#D91B7E]/80">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
