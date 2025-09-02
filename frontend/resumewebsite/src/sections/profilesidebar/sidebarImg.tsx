import Image from "next/image";

export default function SidebarImg() {
  return (
    <>
      {/* Logo or image as a clickable link */}
          <Image
          src="/Screenshot_20240517_162409_Instagram.jpg" // relative to public/
          alt="Lexon.dev Logo"
          width={200}
          height={50}
          className="my-4 rounded-full object-cover"
          />
    </>
  );
}
