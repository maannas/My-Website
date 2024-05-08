"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ link }) {
  const pathName = usePathname();

  return (
    <Link href={link.url} className={`rounded px-2 py-1 ${pathName === link.url && 'bg-black/80 text-white'}`}>
        {link.title}
    </Link>
  );
}

export default NavLink;
