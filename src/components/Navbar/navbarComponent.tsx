import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="bg-[#1976D2] p-4">
      <div className="container mx-auto flex justify-between items-center bg-[#1976D2]">
        <div>
          <Link href="#">
            <div className="text-white text-xl font-bold bg-[#1976D2]">Navbar</div>
          </Link>
        </div>
        <div>
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
    </nav>
  );
}
 
export default Navbar;