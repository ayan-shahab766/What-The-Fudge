import Link from "next/link";
import { LayoutDashboard, PlusCircle, Home, UtensilsCrossed } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#1A0E07] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-[#0F0805] border-r border-[#8B4513]/20 fixed top-0 left-0 h-full z-40">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-[#8B4513]/20">
          <Link href="/" className="font-display text-xl text-[#F5DEB3] leading-tight block">
            What The<br />
            <span className="text-[#D2691E] italic">Fudge</span>
          </Link>
          <span className="text-[#8B6347] text-xs tracking-widest uppercase mt-1 block">Admin</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <NavItem href="/admin" icon={<LayoutDashboard size={16} />} label="Dashboard" />
          <NavItem href="/admin/add" icon={<PlusCircle size={16} />} label="Add Dessert" />
          <div className="my-4 h-px bg-[#8B4513]/20" />
          <NavItem href="/menu" icon={<UtensilsCrossed size={16} />} label="View Menu" />
          <NavItem href="/" icon={<Home size={16} />} label="Public Site" />
        </nav>

        <div className="px-6 py-4 border-t border-[#8B4513]/20">
          <p className="text-[#8B6347] text-xs">What The Fudge © {new Date().getFullYear()}</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#0F0805] border-b border-[#8B4513]/20 px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-display text-lg text-[#F5DEB3]">
          WTF <span className="text-[#8B6347] text-xs font-sans uppercase tracking-widest">Admin</span>
        </Link>
        <div className="flex gap-3">
          <Link href="/admin" className="text-[#D2B48C] hover:text-[#F5DEB3] text-xs uppercase tracking-wider">
            Dashboard
          </Link>
          <Link href="/admin/add" className="text-[#D2B48C] hover:text-[#F5DEB3] text-xs uppercase tracking-wider">
            Add
          </Link>
          <Link href="/" className="text-[#D2B48C] hover:text-[#F5DEB3] text-xs uppercase tracking-wider">
            Site
          </Link>
        </div>
      </div>

      {/* Main content - offset for sidebar */}
      <div className="flex-1 md:ml-56 mt-12 md:mt-0">
        {children}
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#8B6347] hover:text-[#F5DEB3] hover:bg-[#2C1810] transition-all text-sm group"
    >
      <span className="group-hover:text-[#D2691E] transition-colors">{icon}</span>
      {label}
    </Link>
  );
}
