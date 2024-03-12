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
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className=" faIcon" />
          </div>
          <div className="flex space-x-[2rem]">
            <FontAwesomeIcon icon={faCartShopping} className=" faIcon" />
            <FontAwesomeIcon icon={faMessage} className=" faIcon" />
            <FontAwesomeIcon icon={faBell} className=" faIcon" />
          </div>
        </nav>
      </header>
    </>
  );
}
