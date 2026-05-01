import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bone">
      <div className="container-px mx-auto max-w-[1400px] py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-medium tracking-tight">Northbound</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <p className="mt-5 max-w-sm text-sm text-graphite leading-relaxed">
              A curated network of vetted global professionals — built on fair pay,
              long partnerships, and high standards.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-4">Platform</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/talent" className="hover:text-accent transition-colors">Browse talent</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Book a call</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-4">Company</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/about" hash="mission" className="hover:text-accent transition-colors">Mission</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Apply as talent</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:hello@northbound.work" className="hover:text-accent transition-colors">hello@northbound.work</a></li>
              <li className="text-graphite">Remote — global</li>
            </ul>
            <div className="mt-6 flex gap-4 text-sm text-graphite">
              <a href="#" className="hover:text-foreground">LinkedIn</a>
              <a href="#" className="hover:text-foreground">X</a>
              <a href="#" className="hover:text-foreground">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-graphite">
          <p>© {new Date().getFullYear()} Northbound Talent Co. All rights reserved.</p>
          <p>Fair pay. Vetted talent. Long-term partnerships.</p>
        </div>
      </div>
    </footer>
  );
}
