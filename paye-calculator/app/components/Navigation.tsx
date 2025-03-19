'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Single Income', href: '/' },
  { name: 'Multiple Income', href: '/multiple-income' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-4 sm:gap-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            'text-sm transition-colors hover:text-primary',
            pathname === item.href
              ? 'font-medium text-primary'
              : 'text-muted-foreground'
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
