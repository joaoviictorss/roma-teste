import LogoSvg from "../../assets/logo/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-semibold text-xl self-center sm:self-start">
      <img
        src={LogoSvg}
        alt="romã logo"
        className="w-14 h-14 rounded-full p-2 bg-gray-100"
      />
      <span className="font-poppins">Generic Corp.</span>
    </div>
  );
};

export default Logo;
