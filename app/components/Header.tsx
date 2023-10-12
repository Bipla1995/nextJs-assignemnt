import Link from "next/link";

function Header() {
  return (
    <header className="p-5 bg-blue-500 flex justify-between items-center">
      <p className="font-bold text-white">I am a header</p>
      <Link href="/" className="px-2 py-1 bg-white text-blue-500">
        Home
      </Link>
    </header>
  );
}

export default Header;
