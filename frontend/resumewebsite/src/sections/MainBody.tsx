import Link from "next/link";

export default function MainBody() {
  return (
    <div className="flex justify-left items-start p-4 min-h-screen shadow-md bg-[#3D3327]">
      <div className="space-x-0 font-bold">
        <Link href="/about">About</Link>
        
      </div>
    </div>
  );
}
