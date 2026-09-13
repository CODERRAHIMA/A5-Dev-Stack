import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-100 mt-8 md:mt-18">
      <div className="py-18 grid grid-cols-5 justify-between gap-4 max-w-7xl mx-auto px-0 md:px-8 lg:px-8 font-jakarta">
        <div className="col-span-5 md:col-span-2 flex flex-col items-center md:items-start gap-2">
          <img src={Logo} alt="Logo" className="w-30 h-8" />
          <p className="text-sm text-center md:text-left max-w-sm md:max-w-md lg:max-w-lg text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex flex-wrap items-center gap-4 md:gap-2 xl:gap-4 text-sm font-semibold text-gray-600 mt-4">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-500 lg:hidden">•</span>
              <a href="#">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-500 lg:hidden">•</span>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h2 className="text-[#0F172A] text-xs font-bold">PRODUCT</h2>
          <ul className="flex flex-col gap-3 font-medium text-xs text-gray-600 mt-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h2 className="text-[#0F172A] text-xs font-bold">COMPANY</h2>
          <ul className="flex flex-col gap-3 font-medium text-xs text-gray-600 mt-4">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h2 className="text-[#0F172A] text-xs font-bold">LEGAL</h2>
          <ul className="flex flex-col gap-3 font-medium text-xs text-gray-600 mt-4">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between px-4 md:px-8 py-4 md:py-8 mb-6 md:mb-0 text-xs md:text-sm text-[#94A3B8] max-w-7xl mx-auto border-t-2 border-gray-100">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-2 md:gap-4">
          <p><a href="#">Privacy</a></p>
          <p><a href="#">Terms</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
