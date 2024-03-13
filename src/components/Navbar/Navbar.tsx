"use client";
import "./navbar.css";
// zustand
import toggleStore from "@/zustand/toggleStore";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faCartShopping,
  faMessage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const { editToggleSidebar } = toggleStore((state) => state);
  // ! handlers
  const handleToggle = () => {
    editToggleSidebar();
  };
  return (
    <>
      <header className="px-[2rem] py-[0.7rem] bg-transparent ">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-[2rem] ">
            <FontAwesomeIcon
              icon={faBars}
              className="faIcon"
              onClick={handleToggle}
              role="button"
              aria-label="toggle sidebar"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" faIcon"
              aria-label="search bar"
            />
          </div>
          <div className="flex space-x-[2rem]">
            <FontAwesomeIcon
              icon={faCartShopping}
              className=" faIcon"
              role="button"
              aria-label="cart shopping"
            />
            <FontAwesomeIcon
              icon={faMessage}
              className=" faIcon"
              role="button"
              aria-label="chat"
            />
            <FontAwesomeIcon
              icon={faBell}
              className=" faIcon"
              role="button"
              aria-label="notification"
            />
          </div>
        </nav>
      </header>
    </>
  );
}
