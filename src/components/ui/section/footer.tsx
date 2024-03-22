import Image from 'next/image';
import { FaCreditCard } from 'react-icons/fa';
import React from 'react';

const data = [
  'Kredit Bangun Rumah',
  'Tunai Via Bank Transfer',
  'Kartu Kredit',
  'Rekan Teknologi Tambahan',
];

function Footer() {
  return (
    <div className="p-10 bg-[#012846]  mt-8 text-white">
      <footer className="footer  ">
        <div className="flex flex-col gap-8">
          <Image
            src="/other/Logo-footer.png"
            width={600}
            height={600}
            className="w-[169px] h-[47px]"
            alt="foto"
          />
          <p className="text-md max-w-[80%] text-zinc-300">
            SobatBangun adalah platform digital dari SIG yang bergerak dengan
            misi mengembangkan proses pembangunan dan renovasi rumah secara
            lebih baik serta berkelanjutan.
          </p>
          <nav>
            <p className="text-zinc-300">Social Media :</p>
            <div className="grid grid-flow-col gap-4 pt-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </span>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-12">
          <nav className="flex flex-col gap-6">
            <p className="text-xl">Produk & Layanan</p>
            <span className="link link-hover text-zinc-300">Renovasi</span>
            <span className="link link-hover text-zinc-300">Bangun Rumah</span>
            <span className="link link-hover text-zinc-300">Layanan Desain</span>
            <span className="link link-hover text-zinc-300">Teknologi Tambahan</span>
            <span className="link link-hover text-zinc-300">Beli Material</span>
          </nav>
          <nav className="flex flex-col gap-6">
            <p className="text-xl">Tentang Kami</p>
            <span className="link link-hover text-zinc-300">Tentang SobatBangun</span>
            <span className="link link-hover text-zinc-300">
              Kebijakan Dan Privasi
            </span>
            <span className="link link-hover text-zinc-300">
              Syarat Dan Ketentuan
            </span>
            <span className="link link-hover text-zinc-300">FAQ</span>
            <span className="link link-hover text-zinc-300">
              Daftar Menjadi Mitra
            </span>
          </nav>
        </div>
      </footer>
      <div className="lg:flex-row flex flex-col gap-8 lg:gap-0 justify-between w-full mt-10">
        {data.map((item) => (
          <div key={item} className="flex flex-col   gap-4">
            <p className="text-md">{item}</p>
            <div className="flex gap-6">
              <span className="text-2xl">
                <FaCreditCard />
              </span>
              <span className="text-2xl">
                <FaCreditCard />
              </span>
              <span className="text-2xl">
                <FaCreditCard />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
