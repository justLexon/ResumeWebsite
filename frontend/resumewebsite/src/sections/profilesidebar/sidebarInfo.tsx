import Link from "next/link";
import Image from "next/image";

export default function SidebarInfo() {
  return (
    <nav className="flex items-center py-2 px-4">
      {/* Logo or image as a clickable link */}
      <Link href="/">
        <Image
          src="/Screenshot_20240517_162409_Instagram.jpg" // relative to public/
          alt="Lexon.dev Logo"
          width={200} // adjust size
          height={50}
        />
      </Link>
    </nav>
  );
}
