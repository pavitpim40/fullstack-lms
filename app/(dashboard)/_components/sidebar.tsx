import { Logo } from './logo';
import { SidebarTabs } from './sidebar-routes';
const SideBar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex w-full flex-col">
        <SidebarTabs />
      </div>
    </div>
  );
};

export default SideBar;
