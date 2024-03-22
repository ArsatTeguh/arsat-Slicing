import React from 'react';
import { dataTampilan } from '@/lib/data-tampilan';
import { dataDetail } from '@/lib/data-detail';
import CardImageProduct from '../utils/cardImageProduct';
import InformationProduct from '../utils/informationProduct';
import Testimoni from './testimoni';

function DetailProduct() {
  return (
    <div className="flex lg:flex-row flex-col gap-6 mx-auto justify-center  pt-4">
      <div>
        <p className="font-semibold text-zinc-800 text-2xl pb-4">
          Tampilan Rumah
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-4 gap-2 ">
          {dataTampilan.map((item) => (
            <CardImageProduct key={item.room} data={item} />
          ))}
        </div>
      </div>
      <div className="">
        <div className="p-6 border rounded-md shadow-sm ">
          <InformationProduct {...dataDetail} />
        </div>
        <p className="text-2xl font-semibold pt-8 px-2 lg:px-0">Testimoni</p>
        <Testimoni />
        <Testimoni />
        <Testimoni />
      </div>
    </div>
  );
}

export default DetailProduct;
