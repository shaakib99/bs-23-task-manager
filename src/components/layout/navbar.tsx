import { useState } from "react";
import { Link } from "react-router-dom";
import DropDownRegular from "../dropdowns/dropdown-regular";

const Navbar = (props: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="/"
                >
                  BS-23
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/task"
                    >
                      Task
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/member"
                    >
                      Member
                    </Link>
                  </li>
                  <li className="nav-item">
                    <DropDownRegular />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
