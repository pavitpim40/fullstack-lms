import { Logo } from './logo';
import {SidebarTabs}  from './sidebar-routes';
const SideBar = () => {
	return (  
		<div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
			<div className='p-6'>
				<Logo/>
			</div>
			<div className='flex flex-col w-full'>
				<SidebarTabs />
			</div>
		</div>
	);
}
 
export default SideBar;