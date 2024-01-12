'use client';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

// For Toggle Teacher Mode for Edit Course and Player Mode
export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/teacher');
  const isPlayer = pathname?.startsWith('/chapter');
  return (
    <div className="ml-auto flex gap-x-2">
      {isTeacherPage || isPlayer ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="mr-2 h-4 w-4" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}
      {/* Component ของ Clerk */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
