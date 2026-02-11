import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const modules = [
  { name: "Employee Management", href: "/modules/employee-management" },
  { name: "Attendance & Leave", href: "/modules/attendance-leave" },
  { name: "Payroll & Finance", href: "/modules/payroll" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Overview", href: "/overview" },
  { name: "Why Techzium", href: "/why-techzium" },
  { name: "Integrations", href: "/integrations" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [modulesOpen, setModulesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo-header.png"
            alt="TechZium HR Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold font-display text-foreground">
            Techzium <span className="text-primary">HR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Modules dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setModulesOpen(true)}
            onMouseLeave={() => setModulesOpen(false)}
          >
            <Link
              to="/modules"
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname.startsWith("/modules")
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              Modules <ChevronDown className="h-3 w-3" />
            </Link>
            {modulesOpen && (
              <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-card p-2 shadow-lg">
                <Link
                  to="/modules"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  All Modules
                </Link>
                {modules.map((mod) => (
                  <Link
                    key={mod.href}
                    to={mod.href}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    {mod.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
          <Button size="sm" className="gradient-teal border-0" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-display">Navigation</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pl-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2 mb-1">
                Modules
              </div>
              <Link to="/modules" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted">
                All Modules
              </Link>
              {modules.map((mod) => (
                <Link
                  key={mod.href}
                  to={mod.href}
                  className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  {mod.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button className="gradient-teal border-0 w-full" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
