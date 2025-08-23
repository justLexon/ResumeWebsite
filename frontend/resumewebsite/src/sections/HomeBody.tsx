import Link from "next/link";

export default function MainBody() {
  return (
    <nav className="flex justify-left items-center py-0 px-0 shadow-md bg-white">
      <Link href="/" className="font-bold text-lg text-black">Lexon.dev</Link>
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
