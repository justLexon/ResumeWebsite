import ResumeBody from "@/sections/ResumeBody";
import ProfileSidebar from "@/sections/ProfileSidebar";

export default function Home() {
  return (
      <div className="flex-1 min-h-screen">
        {/* Sidebar */}
        <aside className="bg-[#3D3327] flex flex-col">
          <ProfileSidebar />
        </aside>
        
        {/* Sidebar Line Divider */}
        <aside className="w-[2px] bg-[#837F5F]">
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <ResumeBody />
        </main>
      </div>
  );
}
