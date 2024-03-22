import Image from 'next/image';
import React from 'react';
import { PropsDetail } from '@/lib/data-detail';
import InformationProduct from '../utils/informationProduct';

function Other({ data }: { data: PropsDetail }) {
  return (
    <div className="">
      <Image
        src={data?.image!}
        width={600}
        height={600}
        alt=""
        className="w-[484px] lg:h-[201px] h-[200px] rounded  2xl:w-[350px]"
      />

      <div className="mt-6 ">
        <InformationProduct {...data} />
      </div>
    </div>
  );
}

export default Other;
