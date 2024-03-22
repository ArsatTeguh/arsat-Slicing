import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { dataOther } from '@/lib/data-detail';
import DetailProduct from '../ui/section/detailProduct';
import Other from '../ui/section/other';

function HomePage() {
  return (
    <div>
      <div className="w-full relative h-full">
        <Image
          src="/hero-image.png"
          alt="hero-image"
          width={600}
          height={600}
          className="w-full lg:h-[552px] "
        />
        <div className="absolute  top-1/2  left-1/2 transform -translate-x-1/2 lg:px-6 px-4 w-full flex items-center justify-between">
          <span className="lg:text-2xl text-black border-[1px] border-red-500 p-1  lg:p-[10px] bg-zinc-100">
            {' '}
            <IoIosArrowBack />{' '}
          </span>
          <span className="lg:text-2xl text-black border-[1px] border-red-500 p-1 lg:p-[10px] bg-zinc-100">
            {' '}
            <IoIosArrowForward />{' '}
          </span>
        </div>
      </div>
      <div className="lg:px-8 px-2 md:px-4 lg:pt-8 pt-4">
        <DetailProduct />
        <p className="font-semibold text-zinc-800 text-xl lg:text-2xl lg:pt-24 pt-8 pb-6">
          Desain Lainnya oleh Studio SAe
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 mx-auto">
          {dataOther.map((item) => (
            <div
              key={item.title}
              className="lg:p-4 p-2 border  border-zinc-200 rounded-md shadow-sm"
            >
              <Other data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
