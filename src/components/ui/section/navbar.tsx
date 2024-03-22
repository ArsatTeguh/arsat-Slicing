'use client';

import { navigationList } from '@/lib/navigationList';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BreadCrumbs from '../utils/breadCrumbs';
import Sidebar from '../utils/sidebar';
import logo from '@/public/logo-sobat.png';

function Navbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className=" w-full h-full">
      <nav className=" w-full text-zinc-800 bg-white ">
        <div className=" flex items-center justify-between lg:py-10 py-8 lg:px-16 px-8 ">
          <div className="logo ">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={500}
              style={{ width: '147px', height: '42px' }}
            />
          </div>
          <div className="nav-items lg:flex hidden items-center gap-4 font-medium">
            {navigationList.map((item, index: number) => (
              <div
                key={item.href}
                className="hover:bg-zinc-100 px-2 py-2 rounded-md"
              >
                {item.subNav?.length > 0 ? (
                  <div className="dropdown" key={item.href}>
                    <div
                      className={`${
                        item.title === 'Produk & Layanan' && 'text-red-600'
                      } flex items-center gap-2`}
                      tabIndex={0}
                      role="button"
                    >
                      {item.title}
                      <span>
                        {' '}
                        <IoIosArrowDown />{' '}
                      </span>
                    </div>
                    <ul
                      tabIndex={index}
                      className={`dropdown-content  bg-white border z-[1] px-0  menu py-2 shadow  rounded-md w-52 ${
                        pathname === item.href
                          ? 'text-red-600'
                          : 'text-zinc-800'
                      }`}
                    >
                      {item.subNav.map((sub) => (
                        <Link
                          href={sub.href}
                          className="hover:bg-zinc-100 py-2 px-3"
                        >
                          <p> {sub.title} </p>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div
                    className={`${
                      pathname === item.href ? 'text-red-600' : 'text-zinc-800'
                    }`}
                    key={item.title}
                  >
                    <Link href={item.href}>
                      <p> {item.title} </p>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="action items-center gap-4 hidden lg:flex">
            <button type="button" className="py-2 px-4 font-medium">
              Daftar
            </button>
            <button
              type="button"
              className="py-2 px-4  bg-red-600 text-white rounded-md"
            >
              Masuk
            </button>
          </div>
          <div className="lg:hidden relative block ">
            <Sidebar navigationList={navigationList} />
          </div>
        </div>
        <BreadCrumbs />
      </nav>
      {children}
    </div>
  );
}

export default Navbar;
