import { MessageCircle, Music, ShoppingBag, Link2 } from 'lucide-react';
import logo from '@/assets/images/logo.webp';

const nav = ['Home', 'Koleksi', 'Tentang Kami', 'FAQ', 'Kontak'];
const customerService = [
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/6281384654138' },
  { label: 'TikTok', icon: Music, href: 'https://tiktok.com/@azmeestore' },
  { label: 'Shopee Azmee Store', icon: ShoppingBag, href: 'https://shopee.co.id/azmee_store' },
  { label: 'Shopee Azri Olshop', icon: ShoppingBag, href: 'https://shopee.co.id/ika.sari1090' },
  { label: 'Lynk', icon: Link2, href: 'https://lynk.id/hameed8283' },
];
const info = ['Kebijakan Privasi', 'Syarat & Ketentuan', 'Kebijakan Pengiriman', 'Kebijakan Pengembalian'];

export function Footer() {
  return (
    <footer className="bg-coksu-950 text-cream">
      <div className="container-content py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <img src={logo} alt="Azmee Store" className="h-10" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
              Fashion muslim pria dan anak yang mengutamakan kenyamanan, kerapian, dan gaya.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cream/50">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cream/50">
              Customer Service
            </h3>
            <ul className="mt-4 space-y-2.5">
              {customerService.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-cream"
                    >
                      <Icon size={15} strokeWidth={1.75} />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cream/50">
              Informasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {info.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6">
          <p className="text-center text-xs text-cream/50">
            &copy; 2026 Azmee Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
