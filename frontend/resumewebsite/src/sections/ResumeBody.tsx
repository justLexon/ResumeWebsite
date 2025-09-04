import Image from "next/image";

export default function ResumeBody() {
  return (
    <div className="max-w-screen min-h-screen shadow-md bg-[#3D3327]">
      <div className="flex flex-wrap justify-center items-start"> 
        <div className="text-center p-4">  
          {/* Resume Page 1 Image */}
          <Image
          src="/R1.png"
          alt="ResumeP1 Image"
          width={200}
          height={50}
          />

          <h1>Page 1</h1>
        </div>

        <div className="text-center p-4">  
          {/* Resume Page 2 Image */}
          <Image
          src="/R2.png"
          alt="ResumeP2 Image"
          width={200}
          height={50}
          />

          <h1>Page 2</h1>
        </div>
      </div>
    </div>
  );
}
