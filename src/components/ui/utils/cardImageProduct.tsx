import { TampilanProps } from '@/lib/data-tampilan';
import Image from 'next/image';
import React from 'react';

function CardImageProduct({ data }: { data: TampilanProps }) {
  return (
    <div className="lg:p-4 shadow-sm p-2 border flex flex-col gap-5 border-zinc-200 bg-white rounded-md">
      <Image
        src={data?.image}
        width={600}
        height={600}
        alt=""
        className="w-[261px] lg:h-[201px] h-[170px] "
      />

      <div className="flex flex-col gap-1">
        <p className="lg:text-xl text-lg font-bold">{data?.room}</p>
        <p className="text-sm">{data?.size}</p>
      </div>
    </div>
  );
}

export default CardImageProduct;
