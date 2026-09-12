import Logo from "../assets/logo-text.png";

const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 font-jakarta text-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-4 ">
        <img src={Logo} alt="brand-logo" />

        <ul className="flex justify-center gap-6 text-[#475569] font-semibold">
          {navItems.map((item) => (
            <li className="cursor-pointer hover:text-[#D91B7E]">{item}</li>
          ))}
        </ul>

        <div className="flex gap-4">
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
