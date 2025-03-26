import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b bg-amber-700">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/sample-logo.png"
            width={108}
            height={38}
            alt="Example logo"
          />
        </Link>
        <h1></h1>
      </div>
    </header>
  );
};

export default Header;
