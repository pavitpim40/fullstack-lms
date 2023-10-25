'use client';
import { Layout, Compass,List,BarChart } from 'lucide-react';
import { SidebarItem } from './sidebar-item';
import { usePathname } from 'next/navigation';

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
];


const teacherRoutes = [
  {
    icon: List,
    label: 'Courses',
    href: '/teacher/courses',
  },
  {
    icon: BarChart,
    label: 'Analytics',
    href: '/teacher/analytics',
  },
]


export const SidebarTabs = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/teacher');
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className='flex flex-col w-full'>
      {routes.map((route, index) => (
        <SidebarItem key={route.href} Icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
