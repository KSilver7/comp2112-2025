'use client';
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
    // get current url
    const pathname = usePathname();

    // set link class depending on if it matches the current url or not (active/inactive)
    const getLinkClass = (href:string) => {

        if ((pathname === href) || (pathname.startsWith(href = '/'))){
            return 'activeLink';
        }
        else {
            return 'inactiveLink';
        }
    }
    return (
        <nav>
           <h1 className="brand">COMP2112 App</h1>
           <Link href="/">
                COMP2112 App
           </Link>
           <ul className="flex flex-col md:flex-row md:space-x-4">
               <li><Link href="/about" className={getLinkClass('/about')}>About</Link></li>
               <li><Link href="/contact" className={getLinkClass('/contact')}>Contact</Link></li>
               <li><Link href="/blog" className={getLinkClass('/blog')}>Blog</Link></li>
           </ul>
       </nav>
    );
}