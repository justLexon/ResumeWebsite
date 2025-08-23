import MainBody from "@/sections/MainBody";
import ProfileSidebar from "@/sections/ProfileSidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[350px] bg-[#3D3327] flex flex-col">
        <ProfileSidebar />
      </aside>
      
      {/* Sidebar Line Divider */}
      <aside className="px-0.5 bg-[#837F5F]">
      </aside>

      {/* Main content */}
      <main className="flex-1 p-0">
        <MainBody />
      </main>
    </div>
  );
}
