import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="#">
            <div className="text-white text-xl font-bold">Navbar</div>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="#">
                <div className="text-white hover:text-gray-300">Sobre</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="text-white hover:text-gray-300">Serviços</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="text-white hover:text-gray-300">Contato</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;