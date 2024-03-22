import { NavigationListProps } from '@/lib/navigationList';
import Link from 'next/link';
import React from 'react';

type Props = {
  navigationList: NavigationListProps;
};

function Sidebar({ navigationList }: Props) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className=" btn btn-circle swap swap-rotate bg-transparent border-none text-black hover:bg-white shadow-none"
        >
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side  z-[2]">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu py-4 w-80 min-h-full px-0  bg-white text-base-content">
          {/* Sidebar content here */}
          <li>
            <div className="flex items-center justify-between mt-4 hover:bg-white">
              <button
                type="button"
                className="py-2 w-full border-red-500 rounded-md text-zinc-800 border font-medium"
              >
                Daftar
              </button>
              <button
                type="button"
                className="py-2 w-full  bg-red-600 text-white rounded-md"
              >
                Masuk
              </button>
            </div>
          </li>
          <span className="block h-[1px] w-full bg-zinc-200 mt-4" />
          {navigationList.map((item) => (
            <li key={item.href} className="mt-4 text-zinc-800">
              {item.subNav.length <= 0 ? (
                <p> {item.title} </p>
              ) : (
                <details>
                  <summary> {item.title} </summary>
                  <ul>
                    {item.subNav.map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href}>
                          <p>{sub.title}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
