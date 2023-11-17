import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-screen p-4 md:px-[20%] items-center flex flex-row md:justify-between gap-12 bg-black text-white">
      <h1 className="brand text-3xl">Branding</h1>
      <ul className="flex flex-row gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
