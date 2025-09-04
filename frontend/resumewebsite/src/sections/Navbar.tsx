import Link from "next/link";

export default function Navbar() {
  return (
    <div className="min-w-screen">
      <nav className="flex justify-center py-1 px-6 shadow-md bg-[#3D3327] sticky top-0 z-50">
        {/* <Link href="/" className="font-bold text-lg text-black">Lexon.dev</Link> */}
        <div className="mt-15 space-x-1">
          <Link href="/">Overview</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>


        {/* Sidebar Line Divider */}
      <aside className="h-[2px] bg-[#837F5F]">
      </aside>
    </div>
  );
}
