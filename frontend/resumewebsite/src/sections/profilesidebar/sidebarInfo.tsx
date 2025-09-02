import SidebarImg from "./sidebarImg";

export default function SidebarInfo() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Profile Image */}
        <SidebarImg />

      {/* Quick Info */}
      <div className="flex flex-col justify-center m-3 gap-5 text-xl sm:text-xl md:text-2xl lg:text-2xl">
        <h1>Lexon Schexnider</h1>
        <p>I am an aspiring software engineer with a focus on cloud computing.</p>

        <p className="text-base">OthersLexon@gmail.com</p>
        <p className="text-base">Lafayette, LA</p>

        <p className="text-sm">University of Louisiana at Lafayette</p>


      </div>

    </div>
  );
}
