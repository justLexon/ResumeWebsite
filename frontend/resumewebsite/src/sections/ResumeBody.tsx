import Image from "next/image";

export default function ResumeBody() {
  return (
    <div className="flex flex-col justify-left items-start p-2 min-h-screen shadow-md bg-[#3D3327]">
          <Image
          src="/R1.png"
          alt="LexonR1.dev Logo"
          width={200}
          height={50}
          className="m-4"
          />
    </div>
  );
}
