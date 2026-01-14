"use client";

import { ICON_SIZES, NAVBAR_LINKS } from "@/lib/config";
import { buttonStyle } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const pathnameEndpoint = useMemo(() => pathname.split("/")[1], [pathname]);

  return (
    <nav className="fixed right-0 bottom-0 left-0 flex h-24 items-center justify-center">
      <div className="flex gap-2 rounded-full border bg-neutral-50 p-2 dark:bg-neutral-950">
        {NAVBAR_LINKS.map((navbarLink) => (
          <Link
            key={`navbar-link-${navbarLink.title}`}
            href={navbarLink.href}
            title={navbarLink.title}
            draggable={false}
            className={buttonStyle({
              variant: "ghost",
              className: [
                "flex items-center justify-center p-4",
                {
                  "bg-green-500 hover:bg-green-400!":
                    pathnameEndpoint === navbarLink.href.split("/")[1],
                },
              ],
            })}
          >
            <navbarLink.icon size={ICON_SIZES.EXTRA_LARGE} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
