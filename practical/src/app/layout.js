// import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";



export default function Layout({children}) {
  return (
    <><header>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact Us</Link> | <Link href="/login">Login</Link>

    </header>
    <main className="container">{children}</main>
    <footer>
        Copyright © Abc India 2024<br />
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact Us</Link> | <Link href="login">Login</Link>
      </footer></>
  );
}
