'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '#fitur' },
  { name: 'Price List', href: '/price-list' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-dark-secondary/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            JasaWebsite.
          </Link>

          <div className="flex space-x-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`relative group text-gray-700 hover:text-gray-950 transition-colors ${
                  pathname === link.href ? 'text-gray-950' : ''
                }`}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
