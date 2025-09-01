import MainBody from "@/sections/MainBody";
import ProfileSidebar from "@/sections/ProfileSidebar";
import styles from "@/app/styles.module.css";

export default function Home() {
  return (
    <div className={styles.styles}>
      <div className="flex min-w-screen min-h-screen">
        {/* Sidebar */}
        <aside className="w-[250px] bg-[#3D3327] flex flex-col">
          <ProfileSidebar />
        </aside>
        
        {/* Sidebar Line Divider */}
        <aside className="w-[2px] bg-[#837F5F]">
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <MainBody />
        </main>
      </div>
    </div>
  );
}
