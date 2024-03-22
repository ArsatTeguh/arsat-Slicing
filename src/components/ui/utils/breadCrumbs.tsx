'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

function BreadCrumbs() {
  const pathname = usePathname();
  const datapathname = pathname.split('/').filter((item) => item !== '');

  return (
    <div className="text-sm breadcrumbs lg:px-16 px-8 pb-4">
      {datapathname.length === 0 ? (
        <ul>
          <li>
            <span className="text-red-600 font-medium">Home </span>
          </li>
          <li>
            <span className="text-red-600 font-medium">Layanan Desain</span>
          </li>
          <li>
            <span className="text-zinc-400 font-medium"> Omah Apik 3 </span>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <span>Home</span>
          </li>
          {datapathname.map((url: string, index: number) => (
            <li key={url}>
              {datapathname.length - 1 === index ? (
                <span className="text-red-600 font-medium capitalize">
                  {url}
                </span>
              ) : (
                <span>{url}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BreadCrumbs;
