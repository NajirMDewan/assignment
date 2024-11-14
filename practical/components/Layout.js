import "../src/app/globals.css";
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link href="/">Home</Link> | 
        <Link href="/about">About Us</Link> | 
        <Link href="/contact">Contact Us</Link> | 
        <Link href="/login">Login</Link>
        <Link href="/signup">SignUp</Link>
      </header>

      <main>{children}</main>

      <footer>
        Copyright © Abc India 2024<br />
        <Link href="/">Home</Link> | 
        <Link href="/about">About Us</Link> | 
        <Link href="/contact">Contact Us</Link> | 
        <Link href="/login">Login</Link>
      </footer>
    </>
  );
}
