import Image from "next/image";

export default function ResumeBody() {
  return (
    <div className="flex justify-left items-start p-2 min-h-screen shadow-md bg-[#3D3327]">
          {/* Resume Page 1 Image */}
          <Image
          src="/R1.png"
          alt="ResumeP1 Image"
          width={200}
          height={50}
          className="m-4"
          />

          {/* Resume Page 2 Image */}
          <Image
          src="/R2.png"
          alt="ResumeP2 Image"
          width={200}
          height={50}
          className="m-4"
          />
    </div>
  );
}
