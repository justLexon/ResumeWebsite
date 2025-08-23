import MainBody from "@/sections/HomeBody";
import ProfileSidebar from "@/sections/ProfileSidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[350px] bg-gray-100 flex flex-col">
        <ProfileSidebar />
      </aside>
      
      {/* Sidebar Line Divider */}
      <aside className="px-1 bg-red-200">
      </aside>

      {/* Main content */}
      <main className="flex-1 p-0">
        <MainBody />
      </main>
    </div>
  );
}
