import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-center py-1 px-6 shadow-md bg-white sticky top-0 z-50">
        {/* <Link href="/" className="font-bold text-lg text-black">Lexon.dev</Link> */}
        <div className="mt-15 space-x-6 font-bold text-black">
          <Link href="/about">Overview</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>


        {/* Sidebar Line Divider */}
      <aside className="py-1 bg-red-200">
      </aside>
    </div>
  );
}
