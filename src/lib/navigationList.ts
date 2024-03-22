export type NavigationListProps = Array<{
  title: string;
  href: string;
  subNav: Array<{
    title: string;
    href: string;
  }>;
}>;

export const navigationList: NavigationListProps = [
  {
    title: 'Tentang Kami',
    href: '/about',
    subNav: [
      { title: 'company', href: '/about/company' },
    ],
  },
  {
    title: 'Produk & Layanan',
    href: '/product',
    subNav: [
      { title: 'detail', href: '/product/detail' },
      { title: 'konsultasi', href: '/product/konsultasi' },
      { title: 'populer', href: '/product/populer' },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
    subNav: [],
  },
  {
    title: 'FAQ',
    href: '/faq',
    subNav: [],
  },
];
