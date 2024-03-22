import React from 'react';
import { PropsDetail } from '@/lib/data-detail';
import { MdDone } from 'react-icons/md';
import Button from './button';

function InformationProduct(data: PropsDetail) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <p className="text-xl font-semibold"> {data?.title} </p>
          <span className={`px-1 rounded-full bg-zinc-200 text-md block ${data?.role === 'detail' && 'hidden'}`}>
            {' '}
            Scandinavian{' '}
          </span>
        </div>
        <p className="text-sm">{data?.design}</p>
      </div>
      <div
        className={`gap-6 items-center ${
          data?.role === 'detail' ? 'flex' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-2">
          <p className="text-zinc-600 text-sm">Jenis Rumah</p>
          <p className="text-zinc-600 text-sm">Tipe Desain</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{data?.jenis}</p>
          <div className="flex items-center gap-2">
            <span className="bg-red-600 p-[2px] rounded-full text-white">
              <MdDone />
            </span>
            <p className="text-sm text-red-600">{data?.tipe} </p>
          </div>
        </div>
      </div>
      <span className="h-[1px] bg-zinc-200 w-full block" />
      <div className="flex items-center justify-between">
        {data?.detail?.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-1 flex-col text-nowrap"
          >
            <p className="text-red-600 font-bold text-2xl lg:text-xl">
              {item.icon}
            </p>
            <p className="text-xs  text-zinc-500">{item.title}</p>
            <p className="text-sm text-black">
              {item.size} {item.title === 'Luas Bangunan' && <sup>2</sup>}{' '}
            </p>
          </div>
        ))}
      </div>
      <span className="h-[1px] bg-zinc-200 w-full block" />
      <div className="flex flex-col gap-1">
        <p className="text-sm">Harga Desain</p>
        <p className="text-[32px] font-semibold">{data?.price}</p>
        <p className="text-sm text-zinc-500">
          Harga konstruksi mulai dari Rp.560.000.000
        </p>
      </div>
      <Button roles={data?.role!} />
    </div>
  );
}

export default InformationProduct;
