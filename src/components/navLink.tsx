"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md transition-colors text-xl ${
        isActive ? "dark:text-green-400 text-green-700 font-bold" : "text-gray-500 hover:text-green-400"
      }`}
    >
      {children}
    </Link>
  );
}