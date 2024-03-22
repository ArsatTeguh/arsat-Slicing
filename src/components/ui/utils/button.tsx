import React from 'react';

type Props = {
  roles: 'other' | 'detail';
};

function Button({ roles }: Props) {
  return (
    <div className="">
      {roles === 'detail' ? (
        <button
          type="button"
          className="py-[14px] text-[16px] font-medium text-white px-4 w-full bg-red-600 rounded"
        >
          Konsultasi Sekarang
        </button>
      ) : (
        <button
          type="button"
          className="py-2 text-[16px] text-red-600 font-medium bg-white px-4 w-full  border-red-600 border-[1px] rounded"
        >
          Lihat Detail
        </button>
      )}
    </div>
  );
}

export default Button;
