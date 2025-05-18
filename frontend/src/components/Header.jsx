import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white py-5 shadow px-5 flex justify-between items-center">
      <h1 className="text-3xl font-semibold tracking-normal">Taskflo</h1>

      <a
        href="https://github.com/AndresAlbornozgil/task-manager-app"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 cursor-pointer"
      >
        {/* GitHub logo (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.087 3.292 9.387 7.863 10.906.575.105.786-.25.786-.558 0-.275-.01-1.007-.015-1.978-3.198.696-3.875-1.542-3.875-1.542-.523-1.33-1.277-1.683-1.277-1.683-1.044-.715.079-.7.079-.7 1.154.08 1.76 1.184 1.76 1.184 1.026 1.758 2.693 1.25 3.35.956.104-.743.402-1.25.731-1.538-2.552-.29-5.237-1.276-5.237-5.677 0-1.253.448-2.278 1.183-3.078-.118-.29-.513-1.454.112-3.03 0 0 .964-.31 3.16 1.176a10.984 10.984 0 012.878-.387c.976.004 1.96.131 2.878.387 2.195-1.486 3.157-1.176 3.157-1.176.627 1.576.232 2.74.113 3.03.737.8 1.182 1.825 1.182 3.078 0 4.412-2.689 5.384-5.252 5.667.413.36.78 1.076.78 2.17 0 1.568-.014 2.833-.014 3.219 0 .31.208.668.793.556C20.71 21.38 24 17.082 24 12c0-6.352-5.148-11.5-11.5-11.5z" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
