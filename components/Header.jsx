import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b-orange-500 border-b-3 bg-[#f77f00]">
      <div className="wrapper flex items-center justify-between h-20 md:h-30">
        <Link href="/">
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image
              src="/assets/sample-logo.png"
              priority
              fill
              alt="Example logo"
              sizes="(max-width: 768px) 64px, 96px"
              className="object-contain bg-gray-200 rounded-full"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="button">Log in</button>
          <button className="button">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
