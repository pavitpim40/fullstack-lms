import { NavbarRoutes } from "@/app/(main)/_components/navbar/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
