import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b-orange-800 bg-[#ff5c21]">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/sample-logo.png"
            width={108}
            height={38}
            alt="Example logo"
          />
        </Link>
        <div className="flex w-58 justify-end gap-5">
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
