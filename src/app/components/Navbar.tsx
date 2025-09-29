import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
           <h1 className="brand">COMP2112 App</h1>
           <ul className="flex flex-col md:flex-row md:space-x-4">
               <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
               <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
               <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
               <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
           </ul>
       </nav>
    );
}