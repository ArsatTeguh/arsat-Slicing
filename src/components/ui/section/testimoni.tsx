import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdStar } from 'react-icons/md';
import React from 'react';

function Testimoni() {
  return (
    <div className="flex gap-4 pt-4 px-2 lg:px-0">
      <span className="text-5xl text-zinc-500">
        <IoPersonCircleSharp />
      </span>
      <div className="flex flex-col gap-1">
        <div className="flex flex-items gap-2 ">
          <span className="text-md font-medium text-zinc-800">Budi Setiadi</span>
          <span className="text-zinc-500">|</span>
          <div className="flex items-center gap-1">
            <span className="text-xl text-[#FBBC05]">
              <MdStar />
            </span>
            <span className="text-sm text-zinc-500">4.5</span>
          </div>
        </div>
        <p className="text-[16px] text-zinc-500 max-w-[304px] text-justify">
          Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat
          Bangun
        </p>
      </div>
    </div>
  );
}

export default Testimoni;
