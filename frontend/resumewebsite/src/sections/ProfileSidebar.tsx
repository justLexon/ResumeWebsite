import Link from "next/link";
import SidebarInfo from "./profilesidebar/sidebarInfo";

export default function ProfileSidebar() {
  return (
    <nav className="flex justify-center items-center">
        <div>
            <SidebarInfo />
        </div>
    </nav>
  );
}
