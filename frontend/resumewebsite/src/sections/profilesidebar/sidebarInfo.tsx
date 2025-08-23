import Link from "next/link";
import Image from "next/image";

export default function SidebarInfo() {
  return (
    <div className="justify-center items-center">
        <nav className="flex items-center py-2">
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
        
        <h1 className="flex justify-center">Lexon Schexnider</h1>
    </div>
  );
}
