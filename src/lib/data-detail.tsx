import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaArrowsLeftRight } from 'react-icons/fa6';
import { RxAlignBaseline } from 'react-icons/rx';
import { MdOutlineBedroomChild } from 'react-icons/md';

interface PropsDetailSub {
  icon: any;
  title: string;
  size: string;
}

export interface PropsDetail {
  role?: 'other' | 'detail';
  image?: string;
  title: string;
  design: string;
  jenis: string;
  tipe: string;
  detail: Array<PropsDetailSub>;
  price: string;
}
export const dataDetail: PropsDetail = {
  role: 'detail',
  title: 'Omah Apik 3',
  design: 'Studio SAe',
  jenis: 'Scandinavian',
  tipe: 'Dapat Dimodifikasi',
  detail: [
    // eslint-disable-next-line react/react-in-jsx-scope
    { title: 'Dimensi Tanah', icon: <FaArrowsLeftRight />, size: '15 x 8m' },
    { title: 'Luas Bangunan', icon: <FaHome />, size: '112m' },
    { title: 'Lantai', icon: <RxAlignBaseline />, size: '2' },
    { title: 'Kamar Tidur', icon: <MdOutlineBedroomChild />, size: '4' },
  ],
  price: '32.500.000',
};

export const dataOther: PropsDetail[] = [
  {
    image: '/other/apik-1.png',
    role: 'other',
    title: 'Omah Apik 1',
    design: 'Studio SAe',
    jenis: 'Scandinavian',
    tipe: 'Dapat Dimodifikasi',
    detail: [
      // eslint-disable-next-line react/react-in-jsx-scope
      { title: 'Dimensi Tanah', icon: <FaArrowsLeftRight />, size: '15 x 8m' },
      { title: 'Luas Bangunan', icon: <FaHome />, size: '112m' },
      { title: 'Lantai', icon: <RxAlignBaseline />, size: '2' },
      { title: 'Kamar Tidur', icon: <MdOutlineBedroomChild />, size: '4' },
    ],
    price: '32.500.000',
  },
  {
    image: '/other/apik-2.png',
    role: 'other',
    title: 'Omah Apik 2',
    design: 'Studio SAe',
    jenis: 'Scandinavian',
    tipe: 'Dapat Dimodifikasi',
    detail: [
      // eslint-disable-next-line react/react-in-jsx-scope
      { title: 'Dimensi Tanah', icon: <FaArrowsLeftRight />, size: '15 x 8m' },
      { title: 'Luas Bangunan', icon: <FaHome />, size: '112m' },
      { title: 'Lantai', icon: <RxAlignBaseline />, size: '2' },
      { title: 'Kamar Tidur', icon: <MdOutlineBedroomChild />, size: '4' },
    ],
    price: '32.500.000',
  },
  {
    image: '/other/apik-3.png',
    role: 'other',
    title: 'Omah Apik 3',
    design: 'Studio SAe',
    jenis: 'Scandinavian',
    tipe: 'Dapat Dimodifikasi',
    detail: [
      // eslint-disable-next-line react/react-in-jsx-scope
      { title: 'Dimensi Tanah', icon: <FaArrowsLeftRight />, size: '15 x 8m' },
      { title: 'Luas Bangunan', icon: <FaHome />, size: '112m' },
      { title: 'Lantai', icon: <RxAlignBaseline />, size: '2' },
      { title: 'Kamar Tidur', icon: <MdOutlineBedroomChild />, size: '4' },
    ],
    price: '32.500.000',
  },
  {
    image: '/other/apik-4.png',
    role: 'other',
    title: 'Omah Apik 4',
    design: 'Studio SAe',
    jenis: 'Scandinavian',
    tipe: 'Dapat Dimodifikasi',
    detail: [
      // eslint-disable-next-line react/react-in-jsx-scope
      { title: 'Dimensi Tanah', icon: <FaArrowsLeftRight />, size: '15 x 8m' },
      { title: 'Luas Bangunan', icon: <FaHome />, size: '112m' },
      { title: 'Lantai', icon: <RxAlignBaseline />, size: '2' },
      { title: 'Kamar Tidur', icon: <MdOutlineBedroomChild />, size: '4' },
    ],
    price: '32.500.000',
  },
];
