import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b-orange-800 bg-[#ff5c21]">
      <div className="wrapper flex items-center justify-between h-20 md:h-30">
        <Link href="/" className="w-16 md:w-24 flex-shrink-0">
          <Image
            src="/assets/sample-logo.png"
            priority
            width={96}
            height={34}
            alt="Example logo"
            className="w-full h-auto bg-gray-200 rounded-full"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
        <button className="button">
            Log in
          </button>
          <button className="button">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
