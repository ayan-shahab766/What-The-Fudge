import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A0E07] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-[#F5DEB3] mb-2">What The Fudge</h3>
            <p className="text-[#8B6347] text-sm leading-relaxed max-w-xs">
              Handcrafted desserts baked fresh daily. Because life&apos;s too short for bad chocolate.
            </p>
            <div className="flex gap-2.5 mt-4">
              {["𝕏", "📸", "📘"].map((icon, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#2C1810] border border-[#8B4513]/30
                             flex items-center justify-center text-[#DEB887] text-xs
                             cursor-pointer hover:border-[#D2691E] hover:text-[#D2691E]
                             transition-colors"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#DEB887] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {[
                { label: "Home",      href: "/" },
                { label: "Our Menu",  href: "/menu" },
                { label: "Your Cart", href: "/cart" },
                { label: "Admin",     href: "/admin" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}
                    className="text-[#8B6347] hover:text-[#F5DEB3] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#DEB887] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Visit Us
            </h4>
            <ul className="space-y-1.5 text-[#8B6347] text-sm">
              <li>🍫 123 Cocoa Lane, Sweetville</li>
              <li>📞 (555) FUDGE-01</li>
              <li>✉️ hello@whatthefudge.com</li>
              <li className="pt-2 text-[#DEB887]">Mon – Sat: 8am – 8pm</li>
              <li className="text-[#DEB887]">Sun: 10am – 6pm</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-5">
          <div className="h-px flex-1 bg-[#8B4513]/15" />
          <span className="text-[#8B4513]/60 text-base">✦</span>
          <div className="h-px flex-1 bg-[#8B4513]/15" />
        </div>

        <p className="text-center text-[#8B6347] text-xs tracking-wide">
          © {new Date().getFullYear()} What The Fudge · Made with 🍫 and a lot of love
        </p>
      </div>
    </footer>
  );
}