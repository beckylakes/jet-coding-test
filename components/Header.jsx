import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b-orange-800 bg-[#ff5c21]">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-28 md:w-36 flex-shrink-0">
          <Image
            src="/assets/sample-logo.png"
            priority
            width={108}
            height={38}
            alt="Example logo"
            className="w-full h-auto bg-gray-200 rounded-full"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-5">
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
