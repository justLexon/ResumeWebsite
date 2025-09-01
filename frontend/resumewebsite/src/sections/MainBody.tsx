import Link from "next/link";

export default function MainBody() {
  return (
    <nav className="flex justify-left items-start p-4 min-h-screen shadow-md bg-[#3D3327]">
      <div className="space-x-0 font-bold text-black">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
}
