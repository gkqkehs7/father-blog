'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';

import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';

const NAV_ITEMS = [
  { path: 'blog', name: '작업' },
  { path: 'about', name: '회사소개' },
  { path: 'projects', name: '공사실적' },
  { path: 'contact', name: '문의' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();

  const [mobile, setMobile] = useState(false);

  setTheme('light');
  useEffect(() => {
    const user = navigator.userAgent;
    if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
      setMobile(true);
    }
  }, [mobile]);

  return (
    <nav className="flex flex-col justify-between px-8 py-12 md:flex-row">
      <Link href="/blog" className="self-start md:self-auto">
        <div className="flex items-center justify-center">
          <img src="logo.png" className="w-120 h-auto" />
        </div>
      </Link>
      <div className="my-6 flex space-x-8 self-center md:my-0 md:self-auto">
        <ul className="flex space-x-8 ">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="text-secondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
            >
              <NavLink path={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
        {/* {!mobile && (
          <div className="absolute right-[10vw] top-12 md:static">
            <ThemeToggle />
          </div>
        )} */}
      </div>
    </nav>
  );
}
