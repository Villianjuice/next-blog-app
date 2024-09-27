import Link from "next/link";

function Header() {
  return <header>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/blog'>Blog</Link>
  </header>;
}

export default Header;
