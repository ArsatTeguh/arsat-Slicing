export type TampilanProps = {
  image: string;
  room: string;
  size: string;
};
export type TestimonyDataProps = {
  name: string;
  comment: string;
};

export const testimonyData: TestimonyDataProps[] = [
  {
    name: 'Budi Setiadi',
    comment:
      'Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun',
  },
  {
    name: 'Budi Setiadi',
    comment:
      'Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun',
  },
  {
    name: 'Budi Setiadi',
    comment:
      'Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun',
  },
];

export const dataTampilan: TampilanProps[] = [
  {
    image: '/tampilan/r-keluarga.png',
    room: 'Ruangan Keluarga',
    size: '2.0 x 2.9',
  },
  { image: '/tampilan/r-kamar.png', room: 'Kamar Tidur', size: '4.0 x 3.4' },
  {
    image: '/tampilan/r-makan.png',
    room: 'Ruang Makan & Dapur',
    size: '3.0 x 2.9',
  },
  { image: '/tampilan/r-kerja.png', room: 'Ruang Kerja', size: '2.0 x 2.9' },
  { image: '/tampilan/r-kamar.png', room: 'Kamar Tidur', size: '4.0 x 3.4' },
];
