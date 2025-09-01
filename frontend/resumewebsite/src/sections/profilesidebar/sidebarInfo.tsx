import SidebarImg from "./sidebarImg";

export default function SidebarInfo() {
  return (
    <div className="flex justify-center items-center">
        <nav className=" py-2">
            {/* Profile Image */}
              <SidebarImg />

            {/* Name */}
              <h1 className="flex justify-center">Lexon Schexnider</h1>

        </nav>
    </div>
  );
}
