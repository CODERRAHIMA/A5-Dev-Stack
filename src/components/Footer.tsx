import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-100 mt-18">
      <div className="py-18 grid grid-cols-5 justify-between gap-2 max-w-7xl mx-auto font-jakarta">
        <div className="col-span-2 flex flex-col gap-2">
          <img src={Logo} alt="Logo" className="w-30 h-8" />
          <p className="text-sm leading-relaxed max-w-md text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-4 text-sm font-semibold text-gray-600 mt-4">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0F172A] text-xs font-bold">PRODUCT</h2>
          <ul className="flex flex-col gap-3 font-medium text-xs text-gray-600 mt-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0F172A] text-xs font-bold">COMPANY</h2>
          <ul className="flex flex-col gap-3 font-medium text-xs text-gray-600 mt-4">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0F172A] text-xs font-bold">LEGAL</h2>
          <ul className="flex flex-col gap-3 font-medium text-xs text-gray-600 mt-4">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between py-8 text-sm text-[#94A3B8] max-w-7xl mx-auto border-t-2 border-gray-100">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <p><a href="#">Privacy</a></p>
          <p><a href="#">Terms</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
