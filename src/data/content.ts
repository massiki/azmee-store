import {
  Wind,
  Feather,
  Shirt,
  Hand,
  type LucideIcon,
} from 'lucide-react';

import kurtaAlfariz from '@/assets/images/02-kurta-34wm.jpg';
import jallpt from '@/assets/images/03-jallpt.jpeg';
import kurtaHitam from '@/assets/images/04-kurta-hitam.jpg';
import polHitam from '@/assets/images/05-pol-hitam.jpg';
import lkAbuTua from '@/assets/images/06-LK-ABUTUA.jpg';
import jallpo from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos.jpg';

export type Product = {
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  rating: number;
  image: string;
  alt: string;
  badge?: string;
  url?: string;
};

export type ValueItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Package = {
  name: string;
  description: string;
  price: string;
  cta: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    name: 'Baju Koko Kurta Pakistan Pria Dewasa',
    category: 'Koko Kurta Pria',
    price: 'Rp125.120 - Rp135.320',
    oldPrice: 'Rp184.000 - Rp199.000',
    rating: 4.9,
    image: kurtaAlfariz,
    alt: 'Baju Koko Kurta Pakiistan Pria Dewasa',
    badge: 'Terlaris',
    url: 'https://vt.tokopedia.com/t/ZS9B118CpcdYs-Bisrx/',
  },
  {
    name: 'Jubah Anak Laki-Laki Lengan Panjang',
    category: 'Jubah Anak',
    price: 'Rp 129.000',
    rating: 4.9,
    image: jallpt,
    alt: 'Jubah Anak Laki-Laki Lengan Panjang',
    badge: 'Terlaris',
    url: 'https://vt.tokopedia.com/t/ZS9koErDyrWMx-K3npk/',
  },
  {
    name: 'Koko Kurta Pakistan Pria Dewasa Lengan 3/4 Polos',
    category: 'Koko Kurta',
    price: 'Rp 125.000 - Rp 139.000',
    oldPrice: 'Rp 179.000',
    rating: 4.9,
    image: kurtaHitam,
    alt: 'Koko Kurta Pakistan Pria Dewasa Lengan 3/4 Polos',
    badge: 'Baru',
    url: 'https://vt.tokopedia.com/t/ZS9kooSmos6rD-6h8UI/',
  },
  {
    name: 'Jubah Pria Dewasa Lengan Panjang Polos Toyobo',
    category: 'Koko ',
    price: 'Rp 190.000',
    oldPrice: 'Rp 269.000',
    rating: 4.9,
    image: polHitam,
    alt: 'Jubah Pria Dewasa Lengan Panjang Polos Toyobo',
    url: 'https://vt.tokopedia.com/t/ZS9B11KjSwskr-XP1hw/',
  },
  {
    name: 'Jubah Pria Dewasa Lis Kerah Lengan Panjang Katun Toyobo',
    category: 'Jubah',
    price: 'Rp 190.000',
    rating: 4.9,
    image: lkAbuTua,
    alt: 'Jubah Pria Dewasa Lis Kerah Lengan Panjang Katun Toyobo',
    url: 'https://vt.tokopedia.com/t/ZS9koEtdmnB7h-gjrvm/',
  },
  {
    name: 'Jubah Gamis Muslim Anak Laki-laki Lengan Panjang Polos',
    category: 'Jubah Anak',
    price: 'Rp 129.000',
    rating: 4.9,
    image: jallpo,
    alt: 'Jubah Gamis Muslim Anak Laki-laki Lengan Panjang Polos',
    badge: 'Terlaris',
    url: 'https://vt.tokopedia.com/t/ZS9koK2paodAS-n4M9A/',
  },
];

export const valueItems: ValueItem[] = [
  {
    icon: Wind,
    title: 'Adem',
    description: 'Nyaman digunakan sepanjang hari.',
  },
  {
    icon: Feather,
    title: 'Nyaman',
    description: 'Material dan potongan dibuat untuk memberikan rasa nyaman.',
  },
  {
    icon: Shirt,
    title: 'Tidak Mudah Kusut',
    description: 'Lebih mudah dirawat dan tetap terlihat rapi.',
  },
  {
    icon: Hand,
    title: 'Nyaman Dipakai',
    description: 'Nyaman digunakan untuk aktivitas sehari-hari maupun acara spesial.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Andi',
    city: 'Bandung',
    rating: 5,
    quote:
      'Bahannya adem dan nyaman banget. Dipakai seharian tetap enak, dan yang paling saya suka tidak gampang kusut.',
  },
  {
    name: 'Rina',
    city: 'Bandung',
    rating: 5,
    quote:
      'Anaknya suka karena nyaman dipakai. Saya juga suka karena modelnya rapi dan gampang dipakaikan.',
  },
  {
    name: 'Fauzan',
    city: 'Jakarta',
    rating: 5,
    quote:
      'Kurta-nya jatuh pas di badan. Dipakai ke kantor maupun ke masjid tetap terlihat rapi.',
  },
  {
    name: 'Dewi',
    city: 'Surabaya',
    rating: 4.9,
    quote:
      'Beli gamis untuk suami dan jubah untuk anak. Bahannya seragam, kualitasnya juara.',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'Apakah bahan Azmee Store nyaman untuk dipakai sehari-hari?',
    answer:
      'Ya. Setiap produk dirancang dengan material yang adem dan ringan, cocok dipakai seharian untuk berbagai aktivitas.',
  },
  {
    question: 'Apakah produknya mudah kusut?',
    answer:
      'Bahan yang kami pilih tahan kusut dan mudah dirawat, sehingga tetap terlihat rapi meski dipakai berulang.',
  },
  {
    question: 'Bagaimana cara memilih ukuran?',
    answer:
      'Setiap produk memiliki tabel ukuran lengkap di halaman produk. Anda dapat mencocokkan tinggi dan lingkar dada untuk menemukan ukuran yang pas.',
  },
  {
    question: 'Apakah tersedia ukuran untuk anak?',
    answer:
      'Tersedia. Koleksi jubah dan pakaian muslim anak tersedia dalam berbagai ukuran, dirancang agar nyaman dan mudah dipakaikan.',
  },
  {
    question: 'Apakah produk cocok untuk acara formal?',
    answer:
      'Sangat cocok. Desain kami menggabungkan nuansa muslim dengan potongan modern, sehingga tepat untuk acara formal maupun santai.',
  },
  {
    question: 'Bagaimana cara perawatan produknya?',
    answer:
      'Cukup cuci dengan air dingin dan jemur di tempat teduh. Hindari pemutih agar warna tetap awet.',
  },
  {
    question: 'Apakah bisa melakukan penukaran ukuran?',
    answer:
      'Bisa. Kami menyediakan penukaran ukuran selama produk masih dalam kondisi utuh dan dilakukan dalam batas waktu yang berlaku.',
  },
  {
    question: 'Bagaimana cara melakukan pemesanan?',
    answer:
      'Pilih produk, klik "lihat produk" yang akan di arahkan ke aplikasi tiktok dan pesan melalui aplikasi tiktok. Anda juga dapat menghubungi WhatsApp kami untuk bantuan pemesanan.',
  },
];

export const packages: Package[] = [
  {
    name: 'Paket Everyday',
    description: '1 Koko / Kurta',
    price: 'Rp 189.000',
    cta: 'Pilih Koleksi',
  },
  {
    name: 'Paket Couple / Family',
    description: 'Pilihan pakaian untuk ayah dan anak.',
    price: 'Rp 349.000',
    cta: 'Lihat Paket',
    featured: true,
  },
  {
    name: 'Paket Special Moment',
    description: 'Pilihan outfit untuk acara spesial.',
    price: 'Rp 459.000',
    cta: 'Lihat Koleksi',
  },
];

export const stats = [
  { value: '1.000+', label: 'Pelanggan' },
  { value: '4.9/5', label: 'Rating' },
  { value: '16.000+', label: 'Produk Terjual' },
];

export const problems = [
  'Panas dan kurang nyaman dipakai seharian.',
  'Mudah kusut setelah digunakan.',
  'Sulit dipadukan untuk berbagai acara.',
  'Butuh waktu lama untuk dipakai dan dirapikan.',
  'Pakaian anak yang kurang nyaman untuk beraktivitas.',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Koleksi', href: '#koleksi' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'FAQ', href: '#faq' },
];

const whatsappMessage = encodeURIComponent('Halo Azmee Store, saya ingin bertanya tentang produk Anda.');
export const whatsappUrl = `https://wa.me/6281384654138?text=${whatsappMessage}`;
