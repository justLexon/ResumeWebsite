import SidebarImg from "./sidebarImg";

export default function SidebarInfo() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Profile Image */}
        <SidebarImg />

      {/* Name */}
        <h1 className="flex justify-center text-xl sm:text-1xl md:text-2xl lg:text-2xl">Lexon Schexnider</h1>

    </div>
  );
}
