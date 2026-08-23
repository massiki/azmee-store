import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { navLinks } from '@/data/content';
import logo from '@/assets/images/logo.webp';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(107,70,43,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between lg:h-20">
        <a
          href="#home"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="Azmee Store" className="h-10 lg:h-12" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-charcoal/70 transition-colors hover:text-coksu-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#koleksi"
            className="hidden rounded-full bg-coksu-800 px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-coksu-900 hover:shadow-md sm:inline-flex"
          >
            Belanja Sekarang
          </a>
          <a
            href="https://wa.me/6281384654138"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-coksu-800 transition-colors hover:bg-coksu-100 sm:flex"
          >
            <MessageCircle size={20} strokeWidth={1.75} />
          </a>
          <button
            type="button"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-coksu-900 transition-colors hover:bg-coksu-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-content border-t border-coksu-200/50 bg-cream/95 backdrop-blur-md">
          <ul className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-charcoal/80 transition-colors hover:bg-coksu-100 hover:text-coksu-900"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 px-1">
              <a
                href="#koleksi"
                className="block rounded-full bg-coksu-800 px-5 py-3 text-center text-sm font-semibold text-cream transition-colors hover:bg-coksu-900"
                onClick={() => setOpen(false)}
              >
                Belanja Sekarang
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
