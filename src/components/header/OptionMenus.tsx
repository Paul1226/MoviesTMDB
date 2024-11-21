import { useState } from "react";
import "./styles/OptionMenus.css";
import Button from "../buttons/Button.astro";
// import ReactDOM  from "react";

const OpenMenu = () => (
  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <g>
      <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
      <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
      <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
    </g>
  </svg>
);

const CloseMenu = () => (
  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" />
  </svg>
);

export function MenusInteraction() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Aqui se agregan la clase toggle del nav
    const $contentNavMobile = document.querySelector(
      ".content-search-navlist"
    ) as HTMLElement;
    if (!isOpen) {
      $contentNavMobile.classList.add("active");
      setIsOpen(!isOpen);
    } else {
      $contentNavMobile.classList.remove("active");
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="content">
      <button
        className={`buttonMenus ${isOpen ? "open" : "close"}`}
        onClick={handleClick}
      >
        {isOpen ? <CloseMenu /> : <OpenMenu />}
      </button>
    </div>
  );
}
