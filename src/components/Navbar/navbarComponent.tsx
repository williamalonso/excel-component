import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {

    window.addEventListener('resize', handleResize);

    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-[#1976D2] p-4">
      <div className="container mx-auto flex justify-between items-center bg-[#1976D2]">
        <div>
          <Link href="#">
            <div className="text-white text-xl font-bold bg-[#1976D2]">Navbar</div>
          </Link>
        </div>
        {/* Ícone do menu */}
        <div className="md:hidden bg-[#1976D2]">
          <button className="text-white bg-[#1976D2]" onClick={toggleMenu}>
            { isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 bg-[#1976D2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path className="text-[#fff]" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 bg-[#1976D2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path className="text-[#fff]" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        {/* web menu */}
        <div className={`hidden md:block`}>
          <ul className="flex space-x-4 bg-[#1976D2]">
            <li>
              <Link href="#">
                <div className="text-white hover:text-gray-300 bg-[#1976D2]">Sobre</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="text-white hover:text-gray-300 bg-[#1976D2]">Serviços</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="text-white hover:text-gray-300 bg-[#1976D2]">Contato</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`container md:hidden mt-[20px] mx-auto ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col bg-[#1976D2]">
          <li>
            <Link href="#">
              <div className="text-white hover:text-gray-300 bg-[#1976D2]">Sobre</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="text-white hover:text-gray-300 bg-[#1976D2]">Serviços</div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="text-white hover:text-gray-300 bg-[#1976D2]">Contato</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}
 
export default Navbar;