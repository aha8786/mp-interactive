"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-black/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/band/logo1.png"
              alt="핀잇 로고"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* 데스크탑 내비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      pathname.startsWith(link.href)
                        ? ""
                        : "text-[#6E6860]"
                    }`}
                    style={pathname.startsWith(link.href) ? { color: "#1C1814" } : {}}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {pathname.startsWith(link.href) && (
                    <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#0055FF] rounded-full" />
                  )}

                  {/* 드롭다운 */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-xl overflow-hidden transition-all duration-200 ${
                      isServicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    style={{
                      background: "rgba(246,243,236,0.97)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-3 text-sm transition-colors ${
                          pathname === child.href
                            ? "text-[#00D4FF]"
                            : "text-[#6E6860]"
                        }`}
                        style={pathname === child.href ? {} : {}}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.label === "문의하기" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="btn-primary px-5 py-2 text-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors group ${
                    pathname === link.href ? "" : "text-[#6E6860]"
                  }`}
                  style={pathname === link.href ? { color: "#1C1814" } : {}}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#0055FF] rounded-full transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2"
            style={{ color: "#1C1814" }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{
          background: "rgba(246,243,236,0.98)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.href}>
                <div className="px-3 py-2 text-xs font-semibold text-[#6E6860] uppercase tracking-wider">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block px-6 py-2 text-sm rounded-lg transition-colors ${
                      pathname === child.href
                        ? "text-[#00D4FF] bg-black/5"
                        : "text-[#6E6860] hover:bg-black/5"
                    }`}
                    style={pathname === child.href ? {} : {}}
                    onMouseEnter={(e) => {
                      if (pathname !== child.href) {
                        (e.currentTarget as HTMLElement).style.color = "#1C1814";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== child.href) {
                        (e.currentTarget as HTMLElement).style.color = "";
                      }
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  link.label === "문의하기"
                    ? "btn-primary justify-center mt-2"
                    : pathname === link.href
                    ? "bg-black/5"
                    : "text-[#6E6860] hover:bg-black/5"
                }`}
                style={
                  link.label !== "문의하기" && pathname === link.href
                    ? { color: "#1C1814" }
                    : {}
                }
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="px-4 pb-4">
          <p className="text-xs text-[#6E6860] text-center">{SITE_CONFIG.phone}</p>
        </div>
      </div>
    </header>
  );
}
